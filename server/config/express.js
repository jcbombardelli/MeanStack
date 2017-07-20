var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//View Engine EJS
app.set('views', path.join(__dirname, ''/*'views'*/));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));
app.set('clientPath', path.join(__dirname, '../..', 'client'));
app.use(express.static(app.get('clientPath')));

//BodyParser Middleware Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var router = require('../routes/router')(app);



module.exports = app;