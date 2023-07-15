const CartItem = require('../models/CartItem.model');
const Version  = require('../models/version.model' );
const Product  = require('../models/product.model' );

class CartItemController {
   // get all
   async handleGetAllCartItem(req, res) {
      console.log(req.body);
      try {
         const CartItemAll = await CartItem.findAll();
         res.status(200).json({ data: CartItemAll });
      } catch (error) {
         // console.log(error);
         res.status(500).send('error server');
      }
   }
      // get by id
      async handleGetCartItemById(req, res) {
         console.log(req.params.id,11);
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
                  id_cart: req.params.id
               },
             });
            res.status(200).json({ data: cartItems });
         } catch (error) {
            console.log(error);
            res.status(500).send('error server');
         }
      }
   //add items
   async handleAddCartItem(req, res){
      const { id_version,quantity } = req.body;
      try {
         const checkItem = await CartItem.findOne({ where: { id_version } });
         if(!checkItem)
         {
            const cartItem = await CartItem.create(req.body);
            res.status(201).json({ data: cartItem });
         }
         else
         {
            checkItem.quantity = Number(checkItem.quantity) + Number(quantity);
            await checkItem.save(); // Lưu lại dữ liệu sau khi cập nhật
            res.status(200).json({ message: 'updated' });
         }

      } catch (error) {
         // console.log(error);
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new CartItemController();
