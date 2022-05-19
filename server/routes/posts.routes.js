const express = require('express');
const routerP = express.Router();

const posts = require('../controllers/posts.controller');

routerP.get('/', posts.getPosts);
routerP.post('/', posts.newPost);
routerP.get('/:id', posts.getPost);
routerP.put('/:id', posts.updatePost);
routerP.delete('/:id', posts.deletePost);

module.exports = routerP;