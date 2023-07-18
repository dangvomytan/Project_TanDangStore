const express = require('express');
const CustomersController = require('../controllers/customers.controller');
const router = express.Router();

router.get('/',(req, res) => {
     res.json('ok')});

router.post('/register',CustomersController.handelRegister);
router.post('/login',CustomersController.handleLogin);
router.get('/allcustomers',CustomersController.handleGetAllCustomer);


module.exports = router;