const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));

app.post('/reverseString', routes);

app.listen(port, function () {
  console.log('LISTENING ON PORT #', port);
});