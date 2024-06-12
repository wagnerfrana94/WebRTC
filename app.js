let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');
let indexRouter = require('./routes/index');
const fetch = require('node-fetch');
global.base_root = __dirname;


let app = express();
app.use(logger('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// view engine setup
app.set('base_root', __dirname);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/peers', indexRouter);

fetch('https://atendimento.elevor.com/cliente/login', {
  method: 'POST',
  data: {"username": "teste01@elevor.com",
    "password": "teste12",
    "notFailureRedirect": true
  }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));




app.listen(3000, function () {
  console.log('listando https na porta ' + 3000);
});

module.exports = app;
