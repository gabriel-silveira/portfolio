// obtém nome do arquivo de template pelo "path"
module.exports = function (currentLang) {
  const lang = require('../../../src/langs')(currentLang);
  const menu = lang.general.menu;
  
  const getTemplateFileName = function (path) {
    for(let item of menu) if(item[path]) return item[path];
  };

  return getTemplateFileName;
};
