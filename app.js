var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

var stormpathMiddleware = stormpath.init(app, {
  apiKeyFile: 'D:/Course Files/Stormpath API Key/apiKey-2IE9VAT1A1UHMSHUE6I1C3WBA.properties',
  application: 'https://api.stormpath.com/v1/applications/39FeUYtUIA3x8o89uWzbQf',
  secretKey: 'test123',
  expandCustomData: true,
  enableForgotPassword: true
});

app.use(stormpathMiddleware);
app.use('/profile',require('./profile')());

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

app.listen(3000);