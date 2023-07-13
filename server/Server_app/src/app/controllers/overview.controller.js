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
}

module.exports = new OverViewController();
