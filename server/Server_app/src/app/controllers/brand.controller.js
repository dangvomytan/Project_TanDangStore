const Brand = require('../models/brand.model');

class BrandController {
   //get all
   async handleGetAllBrand(req, res) {
      try {
         const brandAll = await Brand.findAll();
         res.status(200).json({ data: brandAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new BrandController();