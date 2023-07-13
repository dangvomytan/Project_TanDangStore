const express = require('express');
const versionController = require('../controllers/version.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllVersion',versionController.handleGetAllVersion);
module.exports = router;