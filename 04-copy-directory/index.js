const fsModule = require("node:fs/promises");
const pathModule = require("node:path");
const filesPath = pathModule.join(__dirname, '/files');


async function copyDirectory(){
    await fsModule.rm(pathModule.join(__dirname, '/files-copy'), {recursive: true});
    const filesCopyPath = await fsModule.mkdir(pathModule.join(__dirname, '/files-copy'), {recursive: true});
    const files = await fsModule.readdir(filesPath);
    files.forEach(async file => {
        await fsModule.copyFile(pathModule.join(filesPath, file), pathModule.join(filesCopyPath, file)); 
    });
}

copyDirectory();