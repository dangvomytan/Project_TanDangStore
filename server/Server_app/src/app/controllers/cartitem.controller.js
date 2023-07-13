const CartItem = require('../models/CartItem.model');

class CartItemController {
   // get all
   async handleGetAllCartItem(req, res) {
      try {
         const CartItemAll = await CartItem.findAll();
         res.status(200).json({ data: CartItemAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new CartItemController();
