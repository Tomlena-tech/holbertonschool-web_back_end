import express from 'express';
import setupRoutes from './routes/index.js';

// Créer l'application Express
const app = express();

// Configurer toutes les routes
setupRoutes(app);

// Démarrer le serveur sur le port 1245
app.listen(1245, () => {
  console.log('Server running on port 1245');
});

// Exporter l'app pour les tests
export default app;
