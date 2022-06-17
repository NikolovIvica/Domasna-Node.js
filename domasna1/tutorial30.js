var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var urlencodedParser = bodyParser.urlencoded({ extended: false });// 


app.set('view engine', 'ejs'); // template engine se koristi za dinamicna strana
app.use('/styles', express.static('styles'))


app.get('/', function (req, res) {
    res.render('index');
});

app.get('/contact', function (req, res) {

    res.render('contact', { qs: req.query });//req.query go zema stringo posle / od linko od adresata 
});


app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body)
    res.render('contact-success', { data: req.body });//req.query go zema stringo posle / od linko od adresata 
});


app.get('/profile/:name', function (req, res) {
    var data = { age: 29, job: 'ninja', hobbie: ['eating', 'fighting', 'fishing'] };
    res.render('profile', { person: req.params.name, data: data });// ja renderira (ispraka) html dokumento vo profile.ejs
});


app.listen(3000);