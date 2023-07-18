const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users.controller')
const checkAuth = require('../middlewares/checkAuth')

router.get('/',(req, res) => {
  res.json('ok')});

router.post('/login',UsersController.handleLogin);
router.post('/register',UsersController.handleRegister);

// router.get('/getAllUsers',checkAuth,UsersController.handleGetAllUsers);
router.get('/getAllUsers',UsersController.handleGetAllUsers);
router.patch('/updateUsers',UsersController.handleUpDateUser);
router.delete('/deleteUsers/:id',UsersController.handleDeleteUser);
module.exports = router;