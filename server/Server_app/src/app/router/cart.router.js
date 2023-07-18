const express = require('express');
const cartController = require('../controllers/cart.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllCart',cartController.handleGetAllCart);
router.get('/getAllById/:id',cartController.handleGetCartById);
module.exports = router;