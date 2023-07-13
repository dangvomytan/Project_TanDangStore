const express = require('express');
const brandController = require('../controllers/brand.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllBrand',brandController.handleGetAllBrand);
module.exports = router;