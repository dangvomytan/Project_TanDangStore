const CartItem = require('../models/CartItem.model');
const Version = require('../models/Version.model');
const Product = require('../models/Product.model');

class CartItemController {
   // get all
   async handleGetAllCartItem(req, res) {
      try {
         const cartItems = await CartItem.findAll();
         res.status(200).json({ data: cartItems });
      } catch (error) {
         console.log(error);
         res.status(500).send('Internal Server Error');
      }
   }

   // get by id
   async handleGetCartItemById(req, res) {
      const { id } = req.params;
      try {
         const cartItems = await CartItem.findAll({
            include: [
               {
                  model: Version,
                  include: [
                     {
                        model: Product,
                     },
                  ],
               },
            ],
            where: {
               id_cart: id,
            },
         });
         res.status(200).json(cartItems);
      } catch (error) {
         console.log(error);
         res.status(500).send('Internal Server Error');
      }
   }

   // add item
   async handleAddCartItem(req, res) {
      const { id_version, quantity } = req.body;
      try {
         const checkItem = await CartItem.findOne({ where: { id_version } });
         if (!checkItem) {
            const cartItem = await CartItem.create(req.body);
            res.status(201).json({ data: cartItem });
         } else {
            checkItem.quantity = Number(checkItem.quantity) + Number(quantity);
            await checkItem.save(); // Lưu lại dữ liệu sau khi cập nhật
            res.status(200).json({ message: 'Updated' });
         }
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: 'Internal Server Error' });
      }
   }
}

module.exports = new CartItemController();
