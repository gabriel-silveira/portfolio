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
      document.getElementById('hamburger-icon').classList.toggle('is-active')
      this.openNav = this.openNav ? false : true
      if(this.openNav) setTimeout(function() {
        console.log('Hide')
      }, 1000)
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
    }
  },
  mounted: function() {
    // cria evento click fora do menu (para fechar)
    document.getElementById('main-menu').addEventListener("click", this.closeMainMenu)
    document.getElementById('nav-main-menu').addEventListener("click", function(e) {
      e.stopPropagation()
    }, false)
    this.getGeneralText()
  }
})
