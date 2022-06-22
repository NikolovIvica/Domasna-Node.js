const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))// za da dobieme pristap do 'body' od  html-ot od new.ejs
app.use(express.json());// ni dozvoluva da koristime json informaci od body-to 


app.get('/', logger, (req, res) => { // ja koristi funkcijata logger vo i pred get req.
    console.log('here');
    res.send('hi'); // praka poraka 'here'
    res.sendStatus(500);
    res.status(500).send('error');// praka status kod 500 i string poraka error
    res.status(500).json({ massage: 'error' }); // praka json file i status kod 500
    res.json({ message: 'error' }); // praka json file
    res.download('server.js');// prakame file .. pri otvoranje na stranata dava prozorec save file
    res.render('index', { text: 'world' }); // renderira index.ejs html file

});




const userRouter = require('./routers/users')
const postRouter = require('./routers/post')


app.use('/users', userRouter); // implementiranje i koristene na patekite/request-ite od users.js
app.use('/post', postRouter); // 





app.listen(3000);