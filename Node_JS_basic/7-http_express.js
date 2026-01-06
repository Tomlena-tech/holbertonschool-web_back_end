const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);

        if (students.length === 0) {
          reject(new Error('Cannot load the database'));
          return;
        }

        let output = `Number of students: ${students.length}\n`;

        const fields = {};

        students.forEach((line) => {
          const studentData = line.split(',');
          const firstname = studentData[0];
          const field = studentData[3];

          if (!fields[field]) {
            fields[field] = [];
          }

          fields[field].push(firstname);
        });

        for (const field in fields) {
          if (field) {
            const count = fields[field].length;
            const list = fields[field].join(', ');
            output += `Number of students in ${field}: ${count}. List: ${list}\n`;
          }
        }

        resolve(output);
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];

  countStudents(databasePath)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245);

module.exports = app;
