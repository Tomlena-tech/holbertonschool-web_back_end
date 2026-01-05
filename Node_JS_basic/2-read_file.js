const fs = require ('fs');
function countStudents(students){
    try {
        const data = fs.readFileSync(students, 'utf-8')
    } catch (error) {
        throw new Error ("Cannot load the database")
    }
    const lines = data.split('\n');
    const validLines = data.split('\n').filter(line => line.trim() !== '');

    }
  module.exports = countStudents;

