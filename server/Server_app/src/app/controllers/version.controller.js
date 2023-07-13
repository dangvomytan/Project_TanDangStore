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

   //add the version
   async handleAddVersion(req, res) {
      try {
         const result = await Version.create(req.body);
         res.status(200).json({ message: 'create success !', data: result });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }

   //update the version
   async handleUpdateVersion(req, res) {
      try {
         const result = await Version.update(req.body, { where: { id: req.params.id } });
         res.status(200).json({ message: 'update success!', data: result });
      } catch (error) {
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
