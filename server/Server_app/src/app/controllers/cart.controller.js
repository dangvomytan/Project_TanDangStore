const Cart = require('../models/cart.model');
const CartItem = require('../models/cartitem.model');
const Version = require('../models/version.model');
const Product = require('../models/product.model');

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
   async handleGetCartById(req, res) {
      const id= req.params.id;
      try {
         const CartById = await CartItem.findAll({
            where: { id_cart: id },
            include: [
              {
                model: Version,
                required: true,
                include: [
                  {
                    model: Product,
                    required: true
                  }
                ]
              }
            ]
          })
         res.status(200).json({ data: CartById });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new CartController();
