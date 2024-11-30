const { Router } = require('express');
const UserController = require('../controllers/UserController.js');

const userController = new UserController();

const router = Router();

// Rota para pegar todos os usuários
router.get('/usuarios', (req, res) => userController.pegaTodos(req, res));

// Rota para pegar um usuário por ID
router.get('/usuarios/:id', (req, res) => userController.pegaUmPorId(req, res));

// Rota para criar um novo usuário
router.post('/usuarios', (req, res) => userController.criaNovo(req, res));

// Rota para atualizar um usuário existente
router.put('/usuarios/:id', (req, res) => userController.atualiza(req, res));

// Rota para excluir um usuário
router.delete('/usuarios/:id', (req, res) => userController.exclui(req, res));

module.exports = router;
