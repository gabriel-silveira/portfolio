var express = require('express');
var nunjucks = require('nunjucks');

var app = express();

// arquivos estáticos
app.use(express.static('static'));

// templates
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

// rotas de VIEWS (frontend)
const viewRoutes = require('./src/routes/views');
app.use('/', viewRoutes());

// rotas de API (backend)
app.use('/api', require('./src/routes/api'));

// página 404 padrão
app.use((req, res) => res.status(404).json({erro: 'Recurso não encontrado',}));

const port = 21020;
app.listen(port, function () {
  console.log(`Running on ${port}`);
});
