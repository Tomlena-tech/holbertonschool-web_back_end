import readDatabase from '../utils.js';

/**
 * Contrôleur pour les routes liées aux étudiants
 */
class StudentsController {
  /**
   * Gère la route GET /students
   * Affiche tous les étudiants groupés par filière (ordre alphabétique)
   * @param {Object} req - Objet requête Express
   * @param {Object} res - Objet réponse Express
   */
  static getAllStudents(req, res) {
    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((fields) => {
        let output = 'This is the list of our students\n';

        // Trier les filières par ordre alphabétique (insensible à la casse)
        const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        sortedFields.forEach((field) => {
          const students = fields[field];
          output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });

        res.status(200).send(output.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  /**
   * Gère la route GET /students/:major
   * Affiche les étudiants d'une filière spécifique (CS ou SWE uniquement)
   * @param {Object} req - Objet requête Express
   * @param {Object} res - Objet réponse Express
   */
  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databasePath = process.argv[2];

    // Valider le paramètre major
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databasePath)
      .then((fields) => {
        const students = fields[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
