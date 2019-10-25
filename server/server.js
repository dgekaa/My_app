var express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost:27017/App',{ 
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require('./Routers/personRouter'));

app.listen(8080, function () {
    console.log("Сервер запущен на порту 8080!");
});
