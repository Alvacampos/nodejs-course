const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const users = [];
app.post('/users', (req, res, next) => {
  users.push({ name: req.body.title });
  res.status(200).render('2.ejs', { pageTitle: 'users', users: users });
});

app.use('/', (req, res, next) => {
  res.status(200).render('1.ejs', { pageTitle: 'add user' });
});

app.listen(4000);
