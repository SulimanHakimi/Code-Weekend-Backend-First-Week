const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'folder');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    const txtFiles = files.filter(file => path.extname(file) === '.txt');

        txtFiles.forEach(file => {
            const filePath = path.join(directoryPath, file);
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return console.log('Error reading file: ' + err);
                }
                console.log(`Content of ${file}:`);
                console.log(data);
            });
        });
});
