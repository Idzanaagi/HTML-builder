const fs = require('fs');
const fsPromises = fs.promises;
const copyFIle = fsPromises.copyFile;
const path = require('path');
const rm = fsPromises.rm;


function copyDir() {
    fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true,}, err => {
        if (err) {
            throw new Error('Something went wrong while creating directory for copied files')
        }
    });

    fsPromises
        .readdir(path.join(__dirname, 'files'))
        .then(files => {
            files.forEach(file => {
                const filePath = path.join(__dirname, 'files', file);
                copyFIle(filePath, path.join(__dirname, 'files-copy', file));
                console.log(`${file} is copied to the "files-copy" folder`)
            })
        })
}

copyDir()
