var express = require('express')
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');

var serverTime = require('./routes/serverTime');

var app = express();
app.listen(3000, function() {
    console.log("Let's start nodeserver on port:3000");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', index);
app.use('/serverTime' , serverTime);

// catch 404 and forward to error handler ->!!
app.use(function(req, res, next) {
    next(createError(404));
});

app.get('/', function(req, res){
    res.sendFile(__dirname+"/views/index.html");
});

module.exports = app;