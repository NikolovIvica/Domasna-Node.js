// modul 1.
var fs = require('fs');
//1.1
var text = fs.readFileSync('text.txt', 'utf8');
console.log('text');
//1.2
fs.writeFileSync('write.txt', text);
//1.3
fs.unlinkSync('write.txt');
//1.4
fs.mkdirSync('stuff', function () {
    fs.readFile('text.txt', 'utf8', function (err, data) {
        fs.writeFile('./stuff/write.txt', data);
    })
})



//Modul 2.

var os = require('os');

//2.1
var freeMemory = os.freemem();
console.log(freeMemory);
//2.2
var totalMemory = os.totalmem();
console.log(totalMemory);
//2.3
var homeDir = os.homedir();
console.log(homeDir);

//Modul 3

const pdf = require('pdfkit');

const doc = new pdf();

doc.pipe(ds.createWriteStream('output.pdf'));

doc.font('fonts/PalatinoBold.ttf');
doc.fontSize(20);
doc.text('Hello World', 100, 100);

doc.image('./photo-1453728013993-6d66e9c9123a.jpeg', {
    fit: [250, 300],
    align: 'center'
});



//Modul 4 -- od prviot tutorijal
var events = require('events');
var util = requir('util');

var Person = function (name) {
    this.name = name;
}


util.inhertis(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function (person) {
    person.on('speak', function (mssg) {
        console.log(person.name + ' said: ' + mssg);
    });
});

james.emit('speak', 'key dudes');
ryu.emit('speak', ' i want a curry');


// Module 5  email

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});