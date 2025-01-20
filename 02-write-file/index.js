const fsModule = require("node:fs");
const pathModule = require("node:path");
const filePath = pathModule.join(__dirname, '/text.txt');
const stream = fsModule.createWriteStream(filePath);
console.log('Hi! Please enter any text. Text will be saved to the file text.txt. To finish the process press ctrl+c or enter exit');
process.stdin.on('data', data => { 
    const userText = data.toString();
    if (userText.includes('exit')) {        
        process.exit(); 
    }
    stream.write(userText);
  });

 process.on('SIGINT', function() {    
    process.exit();    
});

process.on('exit', () => {
    console.log('Writing to file is finished.')
})