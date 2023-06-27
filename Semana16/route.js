// Importe os módulos necessários
const express = require('express');
const UserController = require('./controllers/UserController');

// Crie a instância do roteador do Express
const router = express.Router();

// Defina a rota de login
router.post('/login', UserController.login);

// Exporte o roteador
module.exports = router;