const express = require('express');
const cartitemController = require('../controllers/cartitem.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllCartItem',cartitemController.handleGetAllCartItem);
module.exports = router;