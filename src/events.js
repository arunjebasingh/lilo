
const express = require('express');
function createRouter(db) {
  const router = express.Router();
  const owner = '';

  router.post('/registraton', (req, res, next) => {
    db.query(
      'INSERT INTO registration (registrationId, lastName, email, dateOfBirth) VALUES (1,2,3,4)',
      [owner, req.body.name, req.body.description, new Date(req.body.date)],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });  return router;
}
module.exports = createRouter;