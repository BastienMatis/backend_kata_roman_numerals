const express = require('express');
const cors = require('cors');
const { convertToRoman, convertToArab } = require('./functions/convertNumerals');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  // ... set other CORS headers as needed
  next();
});

app.use(cors({
  origin: 'https://backend-kata-roman-numerals-9914083f65a4.herokuapp.com/',
}));
app.use(express.json());

app.get('/home', (req, res) => {
  const { romanNumber, arabNumber } = req.query;
    res.json({ home: convertToArab(romanNumber) && convertToRoman(arabNumber) });
});


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
