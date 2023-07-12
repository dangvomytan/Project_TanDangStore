const Category = require('../models/category.model');

class CategoryController {
   //get all
   async handleGetAllCategory(req, res) {
      try {
         const categoryAll = await Category.findAll();
         res.status(200).json({ data: categoryAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new CategoryController();
