const express = require('express');
const path = require('path');
const categorias = require('./categoriasRoute');
const users = require('./usersRoute');


module.exports = app => {
  // Middleware para JSON e arquivos estáticos
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../public')));

  // Configuração de rotas
  app.use('/categorias', categorias);  // Rotas relacionadas a categorias
  app.use('/users', users);          // Rotas relacionadas a users
  // Rota inicial (exemplo de view)
  app.get('/', (req, res) => {
    res.render('index', { title: 'Página Inicial' });
  });
};
