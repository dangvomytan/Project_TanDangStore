const express = require('express');
const categoryController = require('../controllers/category.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllCategory',categoryController.handleGetAllCategory);
module.exports = router;