const express = require('express')
const {categoryController} = require('../controller')
const router = express.Router();

router.get('/getcategories', categoryController.getAllcategories)
router.post('/add', categoryController.addCategory);
router.delete('/delete/:id', categoryController.deleteCategory)
router.put('/edit/:id', categoryController.editCategory);

module.exports = router;