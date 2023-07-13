const Product = require('../models/product.model');
const Version = require('../models/version.model');
const Specification = require('../models/specification.model');

class ProductController {
   //get all
   async handleGetAllProduct(req, res) {
      try {
         const productAll = await Product.findAll();
         res.status(200).json({ data: productAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }

   async handleGetProduct(req, res) {
      try {
         const productAll = await Product.findAll({ 
            include: [
               {
                 model: Version,
               //   required: true,
                 include: [
                   {
                     model: Specification,
                     // required: true
                   }
                 ]
               }
             ]});
    res.status(200).json({ data: productAll });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi máy chủ' });
  }
}
}

module.exports = new ProductController();