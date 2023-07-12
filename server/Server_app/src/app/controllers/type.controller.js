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
}

module.exports = new TypeController();