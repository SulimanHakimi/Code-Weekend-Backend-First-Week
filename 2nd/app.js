const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'users.txt');

const server = http.createServer((req, res) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            const lines = data.split('\n').filter(line => line.trim() !== '');
            const headers = lines[0].split(',').map(header => header.trim());
            const people = lines.slice(1).map(line => {
                const values = line.split(',').map(value => value.trim());
                let person = {};
                headers.forEach((header, index) => {
                    person[header] = values[index];
                });
                return person;
            });
            res.end(JSON.stringify(people, null, 2));
        });
 
});


server.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000/users/json`);
});
