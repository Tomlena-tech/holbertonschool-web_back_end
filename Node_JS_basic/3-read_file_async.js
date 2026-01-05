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

        console.log(`Number of students: ${students.length}`);

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
            console.log(`Number of students in ${field}: ${count}. List: ${list}`);
          }
        }

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
