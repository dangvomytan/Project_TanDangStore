const express = require('express');
const typeController = require('../controllers/type.controller');
const router = express.Router();

router.get('/',(req, res) => {res.json('ok')});
router.get('/getAllType',typeController.handleGetAllType);
router.get('/getTypeById/:id',typeController.handleGetTypeById);
router.post('/addType',typeController.handleAddType);
router.patch('/updateType/:id',typeController.handleUpdateType);
router.delete('/deleteType/:id',typeController.handleDeleteType);

module.exports = router;