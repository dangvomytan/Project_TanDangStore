const express = require('express');
const typeController = require('../controllers/type.controller');
const router = express.Router();



router.get('/',(req, res) => {
  res.json('ok')});
router.get('/getAllType',typeController.handleGetAllType);
module.exports = router;