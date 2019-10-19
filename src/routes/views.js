var express = require('express');
var router = express.Router();
var fs = require('fs');

const helpersDir = '../../src/helpers/';

function getRenderParams (page) {
  const { currentLang, texts } = require(`${helpersDir}lang`)({ page });

  const getTemplateFile = require(`${helpersDir}template`)(currentLang);
  
  let filename = `${getTemplateFile(page)}.njk`;

  return { filename, texts };
}

router.get('/', function (req, res) {
  const { filename, texts } = getRenderParams('home');

  return res.render(filename, texts);
});


// outras páginas
router.get('/:page', (req, res) => {
  const { filename, texts } = getRenderParams(req.params.page);
  
  // se o arquivo .njk existir...
  if (fs.existsSync(`views/${filename}`))
    return res.render(filename, texts);
  else
    return res.status(404).json({Erro: 'Página não encontrada',});
});

module.exports = router;
