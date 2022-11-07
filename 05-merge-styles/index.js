const fs = require("fs");
const fsPromises = fs.promises;
const copyFIle = fsPromises.copyFile;
const path = require("path");

function copyStyles() {
  fs.writeFile("bundle.css", "", function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
  
  fsPromises.readdir(path.join(__dirname, "styles")).then((files) => {
    files.forEach((file) => {
      if (path.extname(file) === ".css") {
        fsPromises.readFile(path.join(__dirname, 'styles', file), 'utf-8')
            .then((data1) => fsPromises.appendFile(path.join(__dirname, 'bundle.css'), data1))
      }
    });
  });
}

copyStyles();
