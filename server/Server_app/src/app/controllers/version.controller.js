const Version = require('../models/version.model');

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
}

module.exports = new VersionController();
