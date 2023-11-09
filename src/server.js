const express = require('express');
const cors = require('cors');
const { convertToRoman, convertToArab } = require('./functions/convertNumerals');

const app = express();

const allowedOrigins = ['https://gentle-axolotl-aca312.netlify.app'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(cors(corsOptions));
app.use(express.json());

app.get('/home', (req, res) => {
  const { romanNumber } = req.query;
    res.json({ home: convertToArab(romanNumber) });
});


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
