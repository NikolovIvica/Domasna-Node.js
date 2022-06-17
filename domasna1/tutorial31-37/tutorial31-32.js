var express = require('express');
var todoControler = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', ejs);

//static files
app.use('/assets', express.static('./node-js-playlist/public'));

//fire controllers
todoControler(app);


//listen to port
app.listen(3000);
console.log('listening to port 3000');