const express = require('express');

const app = express();

app.use('/add-user', (req, res, next) => {
  console.log('Welcome to user adding section');
});

app.use('/users', (req, res, next) => {
  console.log('Welcome to user section');
  res.send('<html><body><ul><li>User 1</li></ul></body></html>');
});

app.use('/', (req, res, next) => {
  console.log('Server is up');
  res.send('<html><body><h1>Welcome</h1></body></html>');
});

app.listen(4000);
