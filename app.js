var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var index = require('./routes/index');
var serverTime = require('./routes/serverTime');
var cors = require('cors')

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const axios = require("axios");

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

app.post("/proxy", (req, res) => {
    // axios.get(req.body.address)
    // .then((response) => {
    //     res.send(response.data.Date);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });

    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", req.body.address, false);
    xhr.setRequestHeader("Content-Type", "text/html");
    xhr.send('');

    var time = new Date(xhr.getResponseHeader("Date"));
    console.log(time);
    res.send(time);
});

module.exports = app;