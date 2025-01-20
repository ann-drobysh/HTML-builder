const fsModule = require("node:fs");
const pathModule = require("node:path");
const filePath = pathModule.join(__dirname, '/secret-folder');
fsModule.readdir(filePath, {withFileTypes: true}, (error, files) => {
    if (error) {
        console.log(error);
    }
    files.forEach(file => {
        if (!file.isDirectory()) {
            const fileName = file.name.split('.');
            fsModule.stat(pathModule.join(filePath, file.name), (error, stats) => {
                console.log(fileName[0] + ' - ' + fileName[1] + ' - ' + stats.size);
            });            
        }    
    });
})