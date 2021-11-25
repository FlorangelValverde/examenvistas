const express = require('express');
const { routes } = require('../app');
const router = express.Router();

const authCtrl = require('../controllers/login.controller');

router.post('/login', authCtrl.login);
router.post('/register', authCtrl.createUsuario);

module.exports = router;