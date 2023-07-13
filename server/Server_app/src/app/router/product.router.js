const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllProduct',productController.handleGetAllProduct);
router.get('/getProduct',productController.handleGetProduct);
module.exports = router;