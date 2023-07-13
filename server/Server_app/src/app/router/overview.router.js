const express = require('express');
const overviewController = require('../controllers/overview.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllOverview',overviewController.handleGetAllOverView);
module.exports = router;