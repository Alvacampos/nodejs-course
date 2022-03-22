const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, 'html2.html'));
});

app.use('/', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, 'html1.html'));
});

app.listen(4000);
