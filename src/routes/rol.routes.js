const Express = require('express');
const router = Express.Router();
const rolCtr = require('../controllers/rol.controller')

router.get('/listar', rolCtr.readRol); //// listar rol

router.get('/listarID/:id', rolCtr.readRolID); //// listar por id

router.post('/create', rolCtr.createRol); //// crear rol

router.delete('/delete/:id', rolCtr.deleteRol); //// eliminar rol

router.put('/update/:id', rolCtr.updateRol); //// modificar rol

module.exports = router;