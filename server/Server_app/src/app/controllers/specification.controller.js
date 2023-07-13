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

   //add specification
   async handleAddSpecification(req, res) {
      try {
         const specification = await Specification.create(req.body);
         res.status(201).json({ data: specification });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   
   //update specification
   async handleUpdateSpecification(req, res) {
      try {
         const specification = await Specification.update(req.body, {
            where: { id: req.params.id },
         });
         res.status(200).json({ data: specification });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }

   //delete specification
   async handleDeleteSpecification(req, res) {
           try {
         const specification = await Specification.destroy({
            where: { id: req.params.id },
         });
         res.status(200).json({ data: specification });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   
   }
}

module.exports = new SpecificationController();
