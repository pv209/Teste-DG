const router = require('express').Router();
const UserController = require('./Controller/UserController.js')
router.post('/cadastro', UserController.cadastro);
router.get('/listar', UserController.listar);

 module.exports = router;