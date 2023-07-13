const Order = require('../models/order.model');

class OrderController {
   // get all
   async handleGetAllOrder(req, res) {
      try {
         const OrderAll = await Order.findAll();
         res.status(200).json({ data: OrderAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new OrderController();
