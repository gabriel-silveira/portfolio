var express = require('express')
var nunjucks = require('nunjucks')
var app = express()

// arquivos estáticos
app.use(express.static('static'))

// templates
nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.get('/', (req, res) => res.render('home.njk'))
app.get('/:page', (req, res) => res.render(`${req.params.page}.njk`))

const port = 21020
app.listen(port, function () {
  console.log(`Running on ${port}`)
})
