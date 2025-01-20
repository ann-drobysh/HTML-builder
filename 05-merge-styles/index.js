const fsModule = require("node:fs");
const pathModule = require("node:path");
const filePath = pathModule.join(__dirname, '/styles');
const filesCopyPath = pathModule.join(__dirname, '/project-dist', '/bundle.css');
fsModule.readdir(filePath, {withFileTypes: true}, (error, files) => {
    if (error) {
        console.log(error);
    }
    files.forEach(file => {
        if (!file.isDirectory()) {
            const fileName = file.name.split('.');
            if (fileName[1] === 'css') {
                const stream = fsModule.createReadStream(pathModule.join(filePath, file.name));
                stream.on('data', function(data){
                const fileText = data.toString();
                fsModule.appendFile(filesCopyPath, fileText, (err) => {
                    if (err) {
                      console.log(err);                      
                    }                    
                  });
              })
            }
        }    
    });
})