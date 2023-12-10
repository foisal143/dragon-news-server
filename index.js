const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const data = require('./data.json');
app.use(cors());
app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/category', (req, res) => {
  res.send(data);
});
app.listen(port, () => {
  console.log('port is running');
});
