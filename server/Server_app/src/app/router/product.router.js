const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();

router.get('/',(req, res) => {res.json('ok')});
router.get('/getProduct',productController.handleGetProduct);
router.post('/addProduct',productController.handleAddProduct);
router.patch('/updateProduct',productController.handleUpdateProduct);
router.delete('/deleteProduct/:id',productController.handleDeleteProduct);

router.get('/getAllProduct',productController.handleGetAllProduct);
router.get('/getAllProductById/:id',productController.handleGetAllProductById);

router.post('/addProductAll',productController.handleAddProductAll);

router.get('/get-category-type-product',productController.get_category_type_product);
router.get('/get-product-version-image-specification',productController.get_product_version_image_pecifications);
router.get('/get_product_version_image_pecifications_like_productName',productController.get_product_version_image_pecifications);


module.exports = router;