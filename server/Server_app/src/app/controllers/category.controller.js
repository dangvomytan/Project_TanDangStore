const Category = require('../models/category.model');

class CategoryController {
   // get all
   async handleGetAllCategory(req, res) {
      try {
         const categoryAll = await Category.findAll();
         res.status(200).json({ data: categoryAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   // get one
   async handleGetCategoryById(req, res) {
      try {
         const category = await Category.findByPk(req.params.id);
         res.status(200).json({ data: category });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   // add
   async handleAddCategory(req, res) {
      try {
         const category = await Category.create(req.body);
         res.status(201).json({ data: category });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   // update
   async handleUpdateCategory(req, res) {
      try {
         const category = await Category.update(req.body, {
            where: { id: req.params.id },
         });
         res.status(200).json({ data: category });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   // delete
   async handleDeleteCategory(req, res) {
      try {
         const category = await Category.destroy({
            where: { id: req.params.id },
         });
         res.status(200).json({ data: category });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new CategoryController();
