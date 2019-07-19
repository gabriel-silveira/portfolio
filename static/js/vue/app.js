new Vue({
  delimiters: ['[[',']]'],
  el: '#app',
  data: {
    openNav: false,
    sections: [
      '',
      'profile',
      'what-i-do',
      'recent-works',
      'articles',
      'contact'
    ]
  },
  methods: {
    toggleMenu: function() {
      document.getElementById('hamburger-icon').classList.toggle('is-active')
      this.openNav = this.openNav ? false : true
    },
    closeMainMenu: function() {
      if(this.openNav)
        this.toggleMenu()
    },
    go: function(index) {
      window.location.href = `./${this.sections[index]}`
    }
  },
  mounted: function() {
    // cria evento click fora do menu (para fechar)
    document.getElementById('main-menu').addEventListener("click", this.closeMainMenu)
    document.getElementById('nav-main-menu').addEventListener("click", function(e) {
      e.stopPropagation()
    }, false)

    let self = this
    setTimeout(function() {
      self.toggleMenu()
    }, 500)
  }
})
