const express = require('express');
const routes = require('./routes'); // Certifique-se de que o arquivo `routes.js` existe
const path = require('path');
const router = express.Router();
const app = express();

// Configura o diretório onde os arquivos estáticos (CSS, JS, imagens) estão localizados
app.use(express.static(path.join(__dirname, 'public'))); // Adapte o caminho conforme sua estrutura de pastas

// Defina o diretório onde as views estão localizadas
app.set('views', path.join(__dirname,'views')); // Verifique se a pasta 'views' está corretamente localizada em 'src/views'

// Defina o motor de template
app.set('view engine', 'ejs');

// Defina a rota para renderizar a view
app.get('/', (req, res) => {
  res.render('index');  // Renderiza a view 'index.ejs'
});

// Rota para a página de login
app.get('/login', (req, res) => {
  res.render('login');  // Certifique-se de que o caminho está correto
});

// Configurar as rotas
routes(app); // Importa e aplica as rotas do arquivo `routes.js`

// Exporta o app para ser utilizado no server.js
module.exports = app;
