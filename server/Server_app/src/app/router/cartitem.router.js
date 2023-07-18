const express = require('express');
const cartitemController = require('../controllers/cartitem.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getCartItem',cartitemController.handleGetAllCartItem);
router.post('/addCartItem',cartitemController.handleAddCartItem);
router.get('/addCartItemById/:id',cartitemController.handleGetCartItemById);
router.patch('/updateQtyCartItem',cartitemController.handleUpdateQuality);
router.delete('/deleteCartItem/:id',cartitemController.handleDeleteCartItem);
module.exports = router;