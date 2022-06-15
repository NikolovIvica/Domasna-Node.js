var express = require('express');

var app = express();
app.set('view engine', 'ejs'); // template engine se koristi za dinamicna strana



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');// isprakame html file
});

app.get('/contact', function (req, res) {
    res.sandFile(__dirname + '/contac.html');
});

app.get('/profile/:name', function (req, res) {
    var data = { age: 29, job: 'ninja' , hobbie: ['eating', 'fighting', 'fishing']};
    res.render('profile', { person: req.params.name, data: data});// ja renderira (ispraka) html dokumento vo profile.ejs
});


app.listen(3000);