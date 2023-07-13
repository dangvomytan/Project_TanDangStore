const Type = require('../models/type.model');

class TypeController {
   //get all 
   async handleGetAllType(req, res) {
      try {
         const TypeAll = await Type.findAll();
         res.status(200).json({ data: TypeAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   //get id
   async handleGetTypeById(req, res) {
      try {
         const TypeById = await Type.findById(req.params.id);
         res.status(200).json({ data: TypeById });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   //add the type
   async handleAddType(req, res) {
      try {
         const TypeAdd = await Type.create(req.body);
         res.status(200).json({ data: TypeAdd });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   //update the type
   async handleUpdateType(req, res) {
      try {
         const TypeUpdate = await Type.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
         );
         res.status(200).json({ data: TypeUpdate });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   //delete the type
   async handleDeleteType(req, res) {
      try {
         const TypeDelete = await Type.findByIdAndDelete(req.params.id);
         res.status(200).json({ data: TypeDelete });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new TypeController();