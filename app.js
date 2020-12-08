var createError = require('http-errors');
var express = require('express')
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var index = require('./routes/index');
var serverTime = require('./routes/serverTime');
var cors = require('cors')

var app = express();
app.use(cors());
app.listen(3000, function() {
    console.log("Let's start nodeserver on port:3000");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use('/serverTime' , serverTime);

app.get('/', function(req, res){
    res.sendFile(__dirname+"/views/serverTime/serverTime.html");
});


module.exports = app;