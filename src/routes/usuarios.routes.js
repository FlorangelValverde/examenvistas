const Express = require('express');

const router = Express.Router();

const usuariosCtr = require('../controllers/usuarios.controller');

router.get('/listar', usuariosCtr.readAllUsuario); // LISTAR TODOS LOS USUARIOS
router.get('/buscar/:id', usuariosCtr.readUsuario); // BUSCAR USUARIOS POR ID
router.delete('/eliminar/:id', usuariosCtr.delUsuario); // ELIMINAR USUARIOS
router.put('/editar/:id', usuariosCtr.updateUsuario); // EDITAR USUARIOS


module.exports = router;