var express = require('express');
var router = express.Router();
var fs = require('fs');

const rootDir = '../../';

function getRenderParams (page) {
  const { currentLang, texts, } = require(`${rootDir}src/helpers/lang`)({
    page,
  });

  const getTemplateFile = require(`${rootDir}src/helpers/template`)(currentLang);
  
  let filename = `${getTemplateFile(page)}.njk`;

  return {
    filename,
    texts,
  };
}

module.exports = function () {

  router.get('/', function (req, res) {
    const { filename, texts, } = getRenderParams('home');

    return res.render(filename, texts);
  });

  
  // outras páginas
  router.get('/:page', (req, res) => {
    const { filename, texts, } = getRenderParams(req.params.page);
    
    // se o arquivo .njk existir...
    if (fs.existsSync(`views/${filename}`))
      return res.render(filename, texts);
    else
      return res.status(404).json({Erro: 'Página não encontrada',});
  });

  return router;

};
