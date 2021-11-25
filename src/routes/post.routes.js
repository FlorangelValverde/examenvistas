const Express = require('express');
const { checkTokenUser } = require('../auth/token_validation');
const router = Express.Router();
const postCtr = require('../controllers/post.controller')

router.get('/posts', postCtr.readPost); //// listar post

router.get('/posts/:id', postCtr.readPostID); //// listar por id

router.post('/create', postCtr.createPost); //// crear post

router.post('/posts/:id/delete', postCtr.deletePost); //// eliminar post

router.post('/posts/:id/update', postCtr.updatePost); //// modificar post

module.exports = router;