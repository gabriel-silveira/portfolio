var express = require('express')
var nunjucks = require('nunjucks')
var app = express()

const PATHS = {
  templates: 'views',
  statics: 'static'
}

// arquivos estáticos
app.use(express.static(PATHS.statics))

// templates
nunjucks.configure(PATHS.templates, {
  autoescape: true,
  express: app
})

app.get('/', (req, res) => {
  res.render('./index.html', {
    title: 'Gabriel Silveira, Full stack developer'
  })
})

const port = 3000
app.listen(port, function () {
  console.log(`Running on ${port}`)
})
