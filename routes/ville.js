const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
  res.render('ville', { ville: req.body.nom_ville, description: req.body.description });
});

module.exports = router;
