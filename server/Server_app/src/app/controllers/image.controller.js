const Images = require('../models/image.model');

class ImagesController {
   // get all
   async handleGetAllOrder(req, res) {
      try {
         const OrderAll = await Images.findAll();
         res.status(200).json({ data: OrderAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new ImagesController();
