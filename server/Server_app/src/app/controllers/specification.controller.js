const Specification = require('../models/specification.model');

class SpecificationController {
   //get all
   async handleGetAllSpecification(req, res) {
      try {
         const specificationAll = await Specification.findAll();
         res.status(200).json({ data: specificationAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new SpecificationController();
