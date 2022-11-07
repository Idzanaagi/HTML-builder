const fs = require('fs');
const path = require('path');

const absolutePath = path.join(__dirname,  'text.txt').toString();
const readableStream = fs.createReadStream(absolutePath, 'utf-8');
readableStream.on('data', chunk => console.log(chunk));