const langs = ['pt-br', 'en',];

const pageLangs = {
  home: langs[0],
  perfil: langs[0],
  "o-que-eu-faco": langs[0],
  "trabalhos-recentes": langs[0],
  artigos: langs[0],
  contato: langs[0],

  profile: langs[1],
  "what-do-i-do": langs[1],
  "recent-works": langs[1],
  articles: langs[1],
  contact: langs[1],
};

module.exports = function (options) {
  const texts = require('../../../src/langs')(pageLangs[options.page]);

  return {
    currentLang: pageLangs[options.page],
    texts: texts[options.page],
  };
};
