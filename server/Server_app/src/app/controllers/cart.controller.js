const Cart = require('../models/cart.model');

class CartController {
   // get all
   async handleGetAllCart(req, res) {
      try {
         const CartAll = await Cart.findAll();
         res.status(200).json({ data: CartAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new CartController();
