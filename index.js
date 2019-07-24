var express = require('express')
var nunjucks = require('nunjucks')
const lang = require('./src/langs')({ lang:'pt-br' })
const menu = lang.general.menu
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
  `${getTemplateFile(req.params.page)}.njk`,
  lang[req.params.page]
))

// aplica rotas de API (backend)
app.use('/api', require('./src/api'))

const port = 21020
app.listen(port, function () {
  console.log(`Running on ${port}`)
})

function getTemplateFile(path) {
  for(let item of menu) if(item[path]) return item[path]
}