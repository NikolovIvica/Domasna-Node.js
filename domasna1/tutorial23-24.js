var express = require('express');

var app = express();


app.get('/', function (req, res) {
    res.send('this is the homepage');
});

app.get('/contact', function (req, res) {
    res.send('this is the contact page');
});

app.get('/profile/:id', function (req, res) {
    res.send('you requested to see a profile with the id of ' + req.params.id);// req.params.id go zema parametaro id od profilo
});


app.listen(3000);