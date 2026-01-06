import fs from 'fs';

/**
 * Lit le fichier database CSV et retourne un objet avec les étudiants groupés par filière
 * @param {string} filePath - Chemin vers le fichier CSV
 * @returns {Promise<Object>} - Objet avec les filières comme clés et tableaux de prénoms comme valeurs
 */
const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    try {
      // Diviser en lignes et filtrer les lignes vides
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Ignorer l'en-tête (première ligne)
      const students = lines.slice(1);

      // Objet pour stocker les étudiants par filière
      const fields = {};

      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        // Vérifier que les données sont valides
        if (firstname && field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      resolve(fields);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
});

export default readDatabase;
