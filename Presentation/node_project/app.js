var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');

    //res.sendFile('views/index.html');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.Name + ' ' + req.body.Id;
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(8080, function () {
    console.log('Node server is running..');
});
