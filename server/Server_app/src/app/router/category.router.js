const express = require('express');
const categoryController = require('../controllers/category.controller');
const router = express.Router();

router.get('/',(req, res) => {res.json('ok')});
router.get('/getAllCategory',categoryController.handleGetAllCategory);
router.get('/getCategoryById/:id',categoryController.handleGetCategoryById);
router.post('/addCategory',categoryController.handleAddCategory);
router.patch('/updateCategory/:id',categoryController.handleUpdateCategory);
router.delete('/deleteCategory/:id',categoryController.handleDeleteCategory);

module.exports = router;