const Cart = require('../models/cart.model');
const CartItem = require('../models/cartitem.model');

class CartController {
   // get all
   async handleGetAllCart(req, res) {
      try {
         const CartAll = await Cart.findAll({
            include: [CartItem],
          });
         res.status(200).json({ data: CartAll });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new CartController();
