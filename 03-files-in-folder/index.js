const fs = require('fs');
const fsPromise = fs.promises;
const path = require('path');

fsPromise.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true})
  .then(results => {
    results.forEach(result => {
      if (!result.isDirectory()) {
        const filepath = path.join(__dirname, 'secret-folder', result.name);
        const filename = path.basename(filepath);
        const ext = path.extname(filepath);
        fsPromise
          .stat(filepath)
          .then(res => {
            console.log(`${filename.split('.')[0]} - ${ext.split('.')[1]} - ${(res.size/1024)} kb`)
          })
      }
    })
});
