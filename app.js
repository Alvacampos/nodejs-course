const express = require('express');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();
app.engine('handlebards', expressHbs);
app.set('view engine', 'handlebards');
// Change to test and learn handlebards
// app.set('view engine', 'pug');
app.set('views', 'views');
console.log('Server Started...');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // Render static file
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
