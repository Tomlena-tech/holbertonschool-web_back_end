/**
 * Contrôleur pour les routes générales de l'application
 */
class AppController {
  /**
   * Gère la route GET /
   * @param {Object} req - Objet requête Express
   * @param {Object} res - Objet réponse Express
   */
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
