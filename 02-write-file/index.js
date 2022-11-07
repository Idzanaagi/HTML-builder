const process = require('process');
const { stdin, stdout } = process;
const path = require('path');
const fs = require('fs');


stdout.write('type your text\n')

stdin.on('data', data => {    
    const dataStringified = data.toString();
    stdout.write('type your text again\n');

    fs.appendFile(
        path.join(__dirname, 'notes.txt'),
        dataStringified,
        (err) => {
            if (err) throw err;
        }
    );
    if (dataStringified.toString().trim() === 'exit') {
        console.log('goodbye');
        process.exit();
    }

    process.on('SIGINT', () => {
        console.log('\ngoodbye');
        process.exit();
      });
});

