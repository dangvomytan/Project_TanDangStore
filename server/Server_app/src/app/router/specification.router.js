const express = require('express');
const specificationController = require('../controllers/specification.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllSpecification',specificationController.handleGetAllSpecification);
module.exports = router;