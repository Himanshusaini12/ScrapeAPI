const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const { data } = await axios.get("https://royalcourageousconversions.himasaini6.repl.co/");

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});