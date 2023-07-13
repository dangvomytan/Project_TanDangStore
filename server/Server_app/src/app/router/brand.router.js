const express = require('express');
const brandController = require('../controllers/brand.controller');
const router = express.Router();

router.get('/',(req, res) => {res.json('ok')});
router.get('/getAllBrand',brandController.handleGetAllBrand);
router.get('/getBrandById/:id',brandController.handleGetBrandById);
router.post('/addBrand',brandController.handleAddBrand);
router.patch('/updateBrand/:id',brandController.handleUpdateBrand);
router.delete('/deleteBrand/:id',brandController.handleDeleteBrand);

module.exports = router;