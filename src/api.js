var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Rotas de API');
})

// obter texto gerais, menu, rodapé, etc...
router.get('/texts/general', function (req, res) {
  // de acordo com o idioma...
  const texto = require('./langs/index')({ lang:'pt-br' })
  res.json(texto.general)
})

module.exports = router;
