new Vue({
  delimiters: ['[[',']]'],
  el: '#app',
  data: {
    openNav: false
  },
  methods: {
    mainMenu: function() {
      let self = this
      var mm = document.getElementById('main-menu')
      mm.style.display = 'block'
      setTimeout(function() {
        mm.classList.toggle('active')
        document.getElementById('hamburger-icon').classList.toggle('is-active')
        setTimeout(function() {
          self.openNav = self.openNav ? false : true
        }, 250)
      }, 50)
    },
    closeMainMenu: function() {
      if(this.openNav) {
        let self = this
        var mm = document.getElementById('main-menu')
        mm.classList.toggle('active')
        document.getElementById('hamburger-icon').classList.toggle('is-active')
        setTimeout(function() {
          self.openNav = false
          setTimeout(function() {
            mm.style.display = 'none'
          }, 2000)
        }, 250)
      }
    }
  },
  mounted: function() {
    document.getElementById('main-menu').addEventListener("click", this.closeMainMenu)
    document.getElementById('nav-main-menu').addEventListener("click", function(e) {
      e.stopPropagation()
    }, false)
  }
})
