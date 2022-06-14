var fs = require("fs");

// fs.unlink("writeMe.txt");

fs.mkdirSync("stuff"); // creiranje dir.
fs.rmdirSync("stuff"); //brisenje dir.

//Async

fs.mkdir("stuff", function () {
  fs.readFile("readMe.txt", "utf8", function (err, data) {
    fs.writeFile("./stuff/writeMe.txt", data);
  });
});

// fs.rmdir("stuff");
fs.unlink("./stuff/weiteMe.txt", function () {
  fs.rmdir("stuff");
});
