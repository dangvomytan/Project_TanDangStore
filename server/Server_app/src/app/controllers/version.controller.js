const Version = require('../models/version.model');
const Product = require('../models/product.model');

class VersionController {
   //get all
   async handleGetAllVersion(req, res) {
      try {
         const versionAll = await Version.findAll();
         res.status(200).json({ data: versionAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   // get versionByIdProduct
   async handleGetVersionByIdProduct(req, res) {
      const id = req.params.id;
      try {
         const versionAll = await Version.findAll({
            include: [
              {
                model: Product,
                where: { id: id },
              },
            ],
          });
         res.status(200).json({ data: versionAll });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: 'error server' });
   };
}
   //add the version
   async handleAddVersion(req, res) {
      const {id_product,version_name,quantity,price,description} =req.body;
      try {
         const result = await Version.create({
            id_product: id_product,
            version_name: version_name,
            quantity: quantity,
            price: price,
            description: description
          });
         res.status(200).json({ message: 'create success !', data: result });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: 'error server' });
      }
   }

   //update the version
   async handleUpdateVersion(req, res) {
      const {id,id_product,version_name,quantity,price,description} =req.body;
      try {
         const result = await Version.update(
            {
              id_product: id_product,
              version_name: version_name,
              quantity: quantity,
              price: price,
              description: description
            },
            {
              where: {
                id: id
              }
            }
          )
         res.status(200).json({ message: 'update success!', data: result });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: 'error server' });
      }
   }

   //delete the version
   async handleDeleteVersion(req, res) {
      try {
         console.log(req.params.id);
         const result = await Version.destroy({ where: { id: req.params.id } });
         res.status(200).json({ message: 'delete success!', data: result });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new VersionController();
