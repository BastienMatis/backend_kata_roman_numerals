const express = require('express');
const cors = require('cors');
const { convertToRoman, convertToArab } = require('./functions/convertNumerals');

const app = express();

app.use(cors({
  origin: 'https://gentle-axolotl-aca312.netlify.app',
}));
app.use(express.json());

app.get('/home', (req, res) => {
  const { romanNumber, arabNumber } = req.query;
    res.json({ home: convertToArab(romanNumber) && convertToRoman(arabNumber) });
});


app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port 8000.`);
});
