const OverView = require('../models/overview.model');

class OverViewController {
   //get all
   async handleGetAllOverView(req, res) {
      try {
         const overViewAll = await OverView.findAll();
         res.status(200).json({ data: overViewAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   //get by id
   async handleGetOverViewById(req, res) {
      try {
         console.log(req.params.id);
         const overViewById = await OverView.findAll(req.params.id);
         res.status(200).json({ data: overViewById });
      } catch (error) {
         res.status(500).json({ message: error });
      }
   }
   //add 
   async handleAddOverView(req, res) {
      try {
         const overView = await OverView.create(req.body);
         res.status(200).json({ data: overView });
      } catch (error) {
         res.status(500).json({ message: error });
      }
   }
   //update
   async handleUpdateOverView(req, res) {
      try {
         const overView = await OverView.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
         );
         res.status(200).json({ data: overView });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
   //delete
   async handleDeleteOverView(req, res) {
      try {
         const overView = await OverView.findByIdAndDelete(req.params.id);
         res.status(200).json({ data: overView });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new OverViewController();
