const fs = require('fs');

const filePath = 'example.txt';

const content = 'Hello, this is a test file created using fs.writeFile() method in Node.js!';

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
  } else {
    console.log('File written successfully!');
  }
});
