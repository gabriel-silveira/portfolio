module.exports = function (currentLang) {
  const content = {
    'pt-br': {
      general: {
        info: {
          title: 'Mais informações',
          dev_with: 'Desenvolvido com',
        },
        menu: [
          { path: '', text: 'Página inicial', 'home': 'home' },
          { path: 'perfil', text: 'Perfil', 'perfil': 'profile' },
          { path: 'o-que-eu-faco', text: 'O que eu faço', 'o-que-eu-faco': 'what-i-do' },
          { path: 'trabalhos-recentes', text: 'Trabalhos recentes', 'trabalhos-recentes': 'recent-works' },
          { path: 'artigos', text: 'Artigos', 'artigos': 'articles' },
          { path: 'contato', text: 'Contato', 'contato': 'contact' },
        ],
      },
      home: {
        title: 'Gabriel Silveira, Desenvolvedor full stack',
        text: [
          "Olá, meu nome é Gabriel Silveira e sou",
          'desenvolvedor',
          'full stack',
        ],
        description: '',
      },
      perfil: {
        title: 'Perfil',
      },
      'o-que-eu-faco': {
        title: 'O que eu faço',
      },
    },
    'en': {
      general: {
        info: {
          title: 'More info',
          dev_with: 'Developed with',
        },
        menu: [
          { path: '', text: 'Home' },
          { path: 'profile', text: 'Profile', 'profile': 'profile' },
          { path: 'what-do-i-do', text: 'What do I do', 'what-do-i-do': 'what-do-i-do' },
          { path: 'recent-works', text: 'Recentes works', 'recent-works': 'recent-works' },
          { path: 'articles', text: 'Articles', 'articles': 'articles' },
          { path: 'contact', text: 'Contact', 'contact': 'contact' },
        ],
      },
      home: {
        title: 'Gabriel Silveira, Full stack developer',
        text: [
          "Hello, my name is Gabriel Silveira. I'm a",
          'full stack developer',
        ],
        description: '',
      },
      profile: {
        title: 'Profile',
      },
      'what-do-i-do': {
        title: 'What do I do',
      },
    },
  };
  
  return content[currentLang];
};
