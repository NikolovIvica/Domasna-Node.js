// var http = require('http');
// var fs = require('fs');


// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// // myReadStream.on('data', function (chunk) {
// //     console.log('new chunk received');

// //     myWriteStream.write(chunk);
// // })


// myReadStream.pipe(myWriteStream); //go praj istoto sho i gore .. prvin go chita od read stream i posle go pishuva vo write stream


var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
    console.log('request was made ' + req.url)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadStream.pipe(res);

});


server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');