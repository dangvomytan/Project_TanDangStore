const express = require('express');
const cartController = require('../controllers/cart.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllCart',cartController.handleGetAllCart);
module.exports = router;