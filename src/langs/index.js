module.exports = function(options) {
  const content = {
    'pt-br': {
      general: {
        info: {
          title: 'Mais informações',
          dev_with: 'Desenvolvido com'
        },
        menu: [
          { path: '', text: 'Página inicial' },
          { path: 'perfil', text: 'Perfil', 'perfil': 'profile' },
          { path: 'o-que-eu-faco', text: 'O que eu faço', 'o-que-eu-faco': 'what-i-do' },
          { path: 'trabalhos-recentes', text: 'Trabalhos recentes', 'trabalhos-recentes': 'recent-works' },
          { path: 'artigos', text: 'Artigos', 'artigos': 'articles' },
          { path: 'contato', text: 'Contato', 'contato': 'contact' }
        ]
      },
      home: {
        title: 'Gabriel Silveira, Desenvolvedor full stack',
        text: [
          "Olá, meu nome é Gabriel Silveira e sou",
          'desenvolvedor',
          'full stack'
        ],
        description: ''
      },
      profile: {
        title: 'Perfil',
      }
    },
    'en': {
      general: {
        info: {
          title: 'More info',
          dev_with: 'Developed with'
        },
        menu: [
          { path: '', text: 'Home', file: 'profile' },
          { path: 'profile', text: 'Profile', file: 'profile' },
          { path: 'what-i-do', text: 'What i do', file: 'what-i-do' },
          { path: 'recent-works', text: 'Recentes works', file: 'recent-works' },
          { path: 'articles', text: 'Articles', file: 'articles' },
          { path: 'contact', text: 'Contact', file: 'contact' }
        ]
      },
      home: {
        title: 'Gabriel Silveira, Full stack developer',
        text: [
          "Hello, my name is Gabriel Silveira. I'm a",
          'full stack developer'
        ],
        description: ''
      },
      profile: {
        title: 'Profile',
      }
    }
  }
  
  return content[options.lang]
}