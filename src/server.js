const express = require('express');
const cors = require('cors');
const { convertToRoman, convertToArab } = require('./functions/convertNumerals');

const app = express();

app.use(cors({
  origin: 'https://backend-kata-roman-numerals-9914083f65a4.herokuapp.com/',
}));
app.use(express.json());

app.get('/home', (req, res) => {
  const { romanNumber } = req.query;
    res.json({ home: convertToArab(romanNumber) });
});


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
