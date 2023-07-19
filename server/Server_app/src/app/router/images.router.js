const express = require('express');
const ImagesController = require('../controllers/image.controller');
const router = express.Router();

router.get('/',(req, res) => {res.json('ok')});
router.get('/getAllImage',ImagesController.handleGetAllOrder);

module.exports = router;