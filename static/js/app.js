new Vue({
  delimiters: ['[[',']]',],
  el: '#app',
  data: {
    URI: '/api/',
    openNav: false,
    sections: false,
    texts: false,
    pageTransitionTime: 2000,
    targetPage: null,
  },
  methods: {
    toggleMenu: function() {
      let self = this;
      // exibe
      if(!this.openNav) self.mm();

      setTimeout(function() {
        document.getElementById('hamburger-icon').classList.toggle('is-active');
        self.openNav = self.openNav ? false : true;

        // oculta
        if(!self.openNav) {
          setTimeout(function() {
            self.mm(true);
          }, 750);
        }
      }, 50);
    },
    closeMainMenu: function() {
      if(this.openNav)
        this.toggleMenu();
    },
    pageTransition(remove = true, cb) {
      const div = document.getElementById('page-transition');
      if (remove) {
        div.classList.remove('full');
      } else {
        div.classList.add('full');
        setTimeout(cb, this.pageTransitionTime);
      }
    },
    changeLocation() {
      window.location.href = this.targetPage;
    },
    go: function(index) {
      this.closeMainMenu();
      this.targetPage = `./${this.sections[index].path}`;
      this.pageTransition(false, this.changeLocation);
    },
    getGeneralText: async function(lang = 'pt-br') {
      const res = await axios.get(`${this.URI}texts/general/${lang}`);
      // textos do menu principal
      this.sections = res.data.menu;
      console.log(this.sections);
      // textos gerais
      this.texts = res.data.info;
    },
    getMenuItemText: function(index) {
      return this.sections[index].text;
    },
    mm: function(hide) {
      document.getElementById('main-menu').style.display = hide ? 'none' : 'block';
    },
    checkHttps: function() {
      if (location.protocol != 'https:' && location.hostname !== 'localhost') {
        const addr = window.location.href.substring(window.location.protocol.length);
        location.href = `https: ${addr}`;
      }
    },
  },
  beforeMount: function() {
    // verifica se está no HTTPS
    this.checkHttps();
  },
  mounted: function() {
    // cria evento click fora do menu (para fechar)
    let mm = document.getElementById('main-menu');
    mm.addEventListener("click", this.closeMainMenu);

    document.getElementById('nav-main-menu').addEventListener("click", function(e) {
      e.stopPropagation();
    }, false);

    this.getGeneralText();

    this.mm(true);

    setTimeout(this.pageTransition, 500);
  },
});
