var router = require('express').Router();

router.get('/', function (req, res) {
  res.send('Rotas de API');
});

// obter texto gerais (.general)
router.get('/texts/general/:lang', function (req, res) {
  // de acordo com o idioma...
  const { general, } = require('../langs/index')(req.params.lang);
  res.json(general);
});

module.exports = router;
