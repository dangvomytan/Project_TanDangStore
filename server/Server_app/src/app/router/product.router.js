const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllProduct',productController.handleGetAllProduct);
router.get('/getAllProductById/:id',productController.handleGetAllProductById);
router.get('/getProduct',productController.handleGetProduct);

router.post('/addProduct',productController.handleAddProduct);
router.patch('/updateProduct/:id',productController.handleUpdateProduct);
router.delete('/deleteProduct/:id',productController.handleDeleteProduct);

module.exports = router;