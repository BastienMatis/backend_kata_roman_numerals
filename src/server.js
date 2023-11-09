const express = require('express');
const cors = require('cors');
const { convertToRoman, convertToArab } = require('./functions/convertNumerals');

// import { convertToRoman, convertToArab } from './functions/convertNumerals'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/home', (req, res) => {
    res.json({ home: convertToRoman });
});


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
