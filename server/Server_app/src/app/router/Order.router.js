const express = require('express');
const orderController = require('../controllers/order.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllOrder',orderController.handleGetAllOrder);
module.exports = router;