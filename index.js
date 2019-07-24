var express = require('express')
var nunjucks = require('nunjucks')
const langs = require('./langs')
const sigla = 'pt-br'
const lang = langs[sigla]
var app = express()

// arquivos estáticos
app.use(express.static('static'))

// templates
nunjucks.configure('views', {
  autoescape: true,
  express: app
})

// home
app.get('/', (req, res) => res.render('home.njk', lang.home))

// outras páginas
app.get('/:page', (req, res) => res.render(
  `${req.params.page}.njk`,
  lang[req.params.page]
))

const port = 21020
app.listen(port, function () {
  console.log(`Running on ${port}`)
})
