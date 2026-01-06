import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

/**
 * Configure toutes les routes de l'application
 * @param {Object} app - Instance Express
 */
function setupRoutes(app) {
  // Route pour la page d'accueil
  app.get('/', AppController.getHomepage);

  // Route pour afficher tous les étudiants
  app.get('/students', StudentsController.getAllStudents);

  // Route pour afficher les étudiants d'une filière spécifique
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
}

export default setupRoutes;
