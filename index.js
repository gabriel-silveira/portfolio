var express = require('express')
var nunjucks = require('nunjucks')
var fs = require('fs')

const lang = require('./src/langs')({ lang:'pt-br' })
const menu = lang.general.menu
// obtém nome do arquivo de template pelo "path"
function getTemplateFile(path) {
  for(let item of menu) if(item[path]) return item[path]
}

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
app.get('/:page', (req, res) => {
  let filename = `${getTemplateFile(req.params.page)}.njk`
  // se o arquivo .njk existir...
  if (fs.existsSync(`views/${filename}`))
    return res.render(
      filename,
      lang[getTemplateFile(req.params.page)]
    )
  else
    return res.status(404).json({Erro: 'Página não encontrada'})
})

// aplica rotas de API (backend)
app.use('/api', require('./src/api'))

// página 404 padrão
app.use((req, res) => res.status(404).json({erro: 'Recurso não encontrado'}))

const port = 21020
app.listen(port, function () {
  console.log(`Running on ${port}`)
})
