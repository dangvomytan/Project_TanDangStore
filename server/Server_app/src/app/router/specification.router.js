const express = require('express');
const specificationController = require('../controllers/specification.controller');
const router = express.Router();


router.get('/',(req, res) => {res.json('ok')});

router.get('/getAllSpecification',specificationController.handleGetAllSpecification);
router.post('/addSpecification',specificationController.handleAddSpecification);
router.patch('/updateSpecification/:id',specificationController.handleUpdateSpecification);
router.delete('/deletespecification/:id',specificationController.handleDeleteSpecification);
module.exports = router;