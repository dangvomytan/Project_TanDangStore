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

   //get one
   async handleGetBrandById(req, res) {
      try {
         const brand = await Brand.findByPk(req.params.id);
         res.status(200).json({ data: brand });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   //add the brand
   async handleAddBrand(req, res) {
      try {
         const brand = await Brand.create(req.body);
         res.status(201).json({ data: brand });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }

   //update the brand
   async handleUpdateBrand(req, res) {
      try {
         const brand = await Brand.update(req.body, {
            where: {
               id: req.params.id,
            },
         });
         res.status(200).json({ data: brand });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }

   //delete the brand
   async handleDeleteBrand(req, res) {
      try {
         const brand = await Brand.destroy({
            where: {
               id: req.params.id,
            },
         });
         res.status(200).json({ data: brand });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }      


}

module.exports = new BrandController();