'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send({
    message: 'success',
  });
});

app.get('/status', (req, res) => {
  return res.send({
    message: 'ok',
  });
});

app.listen(3200, () => console.log('Server started on PORT 3200'));
