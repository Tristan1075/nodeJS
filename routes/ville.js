const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', function(req, res, next) {

  axios.get('https://geocode.xyz/?locate=' + req.body.nom_ville + '&geoit=JSON&auth=172643766576427231494x1969')
    .then(geocode => {

      if(!geocode.data.error) {
        console.log(geocode)

        res.render('ville', {
          ville: req.body.nom_ville,
          description: req.body.description,
          coord: {
            longitude: geocode.data.longt,
            latitude: geocode.data.latt
          }
        });
      } else {
        res.render('ville', { error: geocode.data.error.description });
      }
    })
    .catch(err => {
      console.log(err);
  });
});

module.exports = router;
