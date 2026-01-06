const http = require ('http');
const fs = require ('fs');
function countStudents (path) {
    return new Promise ((resolve, reject) => {
        fs.readFile (path, 'utf-8', (err, data) => {
            if (err) {
                reject (new Error ('Cannot load the database'));
            } else {
                const lines = data.split ('\n');
                const students = lines.slice (1).filter(line => line.trim() !== '');
                const numberOfStudents = students.length;
                const fields = {};
                for (const student of students) {
                    if (student) {
                        const [firstName, , ,field] = student.split (',');

                        if (fields[field]) {
                            fields[field].push (firstName);
                        } else {
                            fields[field] = [firstName];
                        }
                    }
                }
                let result = `Number of students: ${numberOfStudents}\n`;
                for (const field in fields) {
                    result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join (', ')}\n`;
                }
                resolve (result.trim ());
            }
        });
    });
}

const app = http.createServer (async (req, res) => {
    if (req.url === '/') {
        res.writeHead (200, { 'Content-Type': 'text/plain' });
        res.end ('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.writeHead (200, { 'Content-Type': 'text/plain' });
        try {
            const result = await countStudents (process.argv[2]);
            res.end (`This is the list of our students\n${result}`);
        } catch (error) {
            res.end (error.message);
        }
    } else {
        res.writeHead (404, { 'Content-Type': 'text/plain' });
        res.end ('Not Found');
    }
});










app.listen(1245);
module.exports = app;
