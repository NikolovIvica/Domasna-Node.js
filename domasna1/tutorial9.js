// var fs = require("fs");

// var readMe = fs.readFileSync("file.txt", "utf8");

// fs.writeFileSync("writeMe.txt", readMe);

// var fs = require("fs");

// fs.readFile("readMe.txt", "utf8", function (err, data) {
//   console.log(data);
// });

// console.log("test");

var fs = require("fs");

fs.readFile("readMe.txt", "utf8", function (err, data) {
  fs.writeFile("writeMe.txt", data);
});
