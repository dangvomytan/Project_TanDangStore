const express = require('express');
const overviewController = require('../controllers/overview.controller');
const router = express.Router();

router.get('/',(req, res) => {res.json('ok')});
router.get('/getAllOverview',overviewController.handleGetAllOverView);
router.get('/getOverviewById/:id',overviewController.handleGetOverViewById);
router.post('/addOverview',overviewController.handleAddOverView);
router.patch('/updateOverview/:id',overviewController.handleUpdateOverView);
router.delete('/deleteOverview/:id',overviewController.handleDeleteOverView);


module.exports = router;