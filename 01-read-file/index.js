const fsModule = require("node:fs");
const pathModule = require("node:path");
const filePath = pathModule.join(__dirname, '/text.txt');
// const fileDirectory = fsModule.open(filePath);
const stream = fsModule.createReadStream(filePath);
stream.on('data', function(data){
    console.log(data.toString());
  })

