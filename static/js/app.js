new Vue({
  delimiters: ['[[',']]'],
  el: '#app',
  data: {
    URI: '/api/',
    openNav: false,
    sections: false,
    texts: false
  },
  methods: {
    toggleMenu: function() {
      let self = this
      // exibe
      if(!this.openNav) self.mm()

      setTimeout(function() {
        document.getElementById('hamburger-icon').classList.toggle('is-active')
        self.openNav = self.openNav ? false : true

        // oculta
        if(!self.openNav) {
          setTimeout(function() {
            self.mm(true)
          }, 750)
        }
      }, 50)
    },
    closeMainMenu: function() {
      if(this.openNav)
        this.toggleMenu()
    },
    go: function(index) {
      window.location.href = `./${this.sections[index].path}`
    },
    getGeneralText: async function() {
      const res = await axios.get(`${this.URI}texts/general`)
      // textos do menu principal
      this.sections = res.data.menu
      // textos gerais
      this.texts = res.data.info
    },
    getMenuItemText: function(index) {
      return this.sections[index].text
    },
    mm: function(hide) {
      document.getElementById('main-menu').style.display = hide ? 'none' : 'block'
    },
    checkHttps: function() {
      if (location.protocol != 'https:')
        location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
    }
  },
  beforeMount: function() {
    // verifica se está no HTTPS
    this.checkHttps();
  },
  mounted: function() {
    let mm = document.getElementById('main-menu')
    // cria evento click fora do menu (para fechar)
    mm.addEventListener("click", this.closeMainMenu)
    document.getElementById('nav-main-menu').addEventListener("click", function(e) {
      e.stopPropagation()
    }, false)

    this.getGeneralText()

    this.mm(true)
  }
})
