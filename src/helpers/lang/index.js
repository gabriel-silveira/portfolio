const langs = ['pt-br', 'en',];

const pageLangs = {
  home: langs[0],
  perfil: langs[0],
  "o-que-eu-faco": langs[0],
  "trabalhos-recentes": langs[0],
  artigos: langs[0],
  contato: langs[0],

  profile: langs[0],
  "what-do-i-do": langs[0],
  "recent-works": langs[0],
  articles: langs[0],
  contact: langs[0],
};

module.exports = function (options) {
  const texts = require('../../../src/langs')(pageLangs[options.page]);

  return {
    currentLang: pageLangs[options.page],
    texts: texts[options.page],
  };
};
