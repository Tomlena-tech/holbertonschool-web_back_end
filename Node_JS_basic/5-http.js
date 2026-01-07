const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const students = lines.slice(1);
        const fields = {};

        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (firstname && field) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        });

        let result = `Number of students: ${students.length}\n`;

        // Trier les fields alphabétiquement
        const sortedFields = Object.keys(fields).sort((a, b) => a.localeCompare(b));

        sortedFields.forEach((field) => {
          result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });

        resolve(result.trim());
      }
    });
  });
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    try {
      const result = await countStudents(process.argv[2]);
      res.end(`This is the list of our students\n${result}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
    }
  }
});

app.listen(1245);

module.exports = app;
