const express = require('express');
const versionController = require('../controllers/version.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllVersion',versionController.handleGetAllVersion);
router.post('/addVersion',versionController.handleAddVersion);
router.patch('/updateVersion/:id',versionController.handleUpdateVersion);
router.delete('/deleteVersion/:id',versionController.handleDeleteVersion);
module.exports = router;