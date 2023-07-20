const Product = require('../models/product.model');
const Version = require('../models/version.model');
const Specification = require('../models/specification.model');
const OverView = require('../models/overview.model');
const Category = require('../models/category.model');
const Type = require('../models/type.model');
const Image = require('../models/image.model');
const { Op } = require('sequelize');

class ProductController {
   //get product
   async handleGetProduct(req, res) {
      try {
         const productAll = await Product.findAll();
         res.status(200).json({ data: productAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }

   // add product
   async handleAddProduct(req, res) {
      try {
         const result = await Product.create(req.body);
         res.status(200).json({ message: 'create success !', dsta: result });
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: error });
      }
   }

   // update product
   async handleUpdateProduct(req, res) {
      const {id, id_type,product_name} = req.body;
      try {
         await Product.update(
            {
              id_type: id_type,
              product_name: product_name
            },
            {
              where: {
                id: id
              }
            }
          );
         res.status(200).json({ message: 'update success!'});
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: error });
      }
   }

   //delete product
   async handleDeleteProduct(req, res) {
      try {
         await Product.destroy({ where: { id: req.params.id } });
         res.status(200).json({ message: 'delete success!'});
      } catch (error) {
         res.status(500).json({ message: error });
      }
   }

   
   // get all info prduct
   async handleGetAllProduct(req, res) {
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
                     },
                  ],
               },
               {
                  model: OverView,
                  //   required: true
               },
            ],
         });
         res.status(200).json({ data: productAll });
      } catch (error) {
         res.status(500).json({ message: 'Lỗi máy chủ' });
      }
   }

   // get all info product by id
   async handleGetAllProductById(req, res) {
      console.log(req.params.id);
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
                     },
                  ],
               },
               {
                  model: OverView,
                  //   required: true
               },
            ],
            where: { id: req.params.id },
         });
         res.status(200).json({ data: productAll });
      } catch (error) {
         res.status(500).json({ message: 'Error server' });
      }
   }
   //add all info products
   async handleAddProductAll(req, res) {
      try {
         const {id_type,product_name,version_name,quantity,price,description} =req.body;
         console.log(req.body);
         const rsProduct = await Product.create({id_type,product_name});
         const rsVersion = await Version.create({id_product: rsProduct.id,version_name,quantity,price,description});
         res.status(200).json({ message: 'create success!', data: rsVersion });
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: error });
      }
   }

   // =============================
// === GET ===
   async  get_category_type_product(req, res) {
      try {
         const data = await Category.findAll({
            include: [
              {
                model: Type,
                include: [
                  {
                    model: Product
                  }
                ]
              }
            ]
          });
         res.status(200).json({ data: data });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: 'Lỗi máy chủ' });
      }
   }

   async  get_product_version_image_pecifications(req, res) {
      try {
         const data = await Product.findAll({
            include: [
              {
                model: Version,
                include: [
                  {
                    model: Image,
                  },
                  {
                    model: Specification,
                  },
                ]
              }
            ]
          });
         res.status(200).json({ data: data });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: 'Lỗi máy chủ' });
      }
   }

   async  get_product_version_image_pecifications_like_productName(req, res) {
      try {
         const data = await Product.findAll({
            include: [
              {
                model: Version,
                include: [
                  {
                    model: Image
                  },
                  {
                    model: Specification
                  }
                ]
              }
            ],
            where: {
              product_name: {
                [Op.like]: '%SE%'
              }
            }
          });
         res.status(200).json({ data: data });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: 'Lỗi máy chủ' });
      }
   }



}

module.exports = new ProductController();