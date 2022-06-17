var bodyParser = require('body-parser');
var mongoose = requite("mongoose");


// connect to database
mongoose.connect('mongodb://test:test@ds017195.mlab.com:17195/todo');


//create schema - this is line blueprint
var todoSchema = new mongoose.Schema({
    item: String

});

var Todo = mongoose.model('Todo', todoSchema);



// var data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: ' kick some coding ass' }]
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/todo', function (req, res) {
        //get data form mogodb and pass it to view
        Todo.find({}, function (err, data) {
            if (err) throw err;
            res.render('todo', { todos: data }); //renderiranje (prikazuvanje) na html od file todo.ejs 
        });
    });

    app.post('/todo', urlencodedParser, function (req, res) {
        //get data from the view and add it to mongodb
        var newTodo = Todo(req.body).save(function (err, data) {
            if (err) throw err;
        });
        res.json(data);


    });

    app.delete('/todo:/:item', function (req, res) {
        //delete the requested item form mongodb
        Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function (err, data) {
            if (err) throw err;
            res.jason(data);
        });

    })

}