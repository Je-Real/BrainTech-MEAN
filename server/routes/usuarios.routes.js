const express = require('express');
const routerU = express.Router();

const users = require('../controllers/usuarios.controller');

routerU.get('/', users.getUsers);
routerU.post('/register', users.createUser);
routerU.post('/login', users.loginUser);
routerU.delete('/delete/:id', users.deleteUser);

module.exports = routerU;