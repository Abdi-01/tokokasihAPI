const express = require('express')
const { productController } = require('../controller')
const router = express.Router();

router.get('/getproducts', productController.getAllproducts)
router.post('/add', productController.addProduct);
router.delete('/delete/:id', productController.deleteProduct)
router.put('/edit/:id', productController.editProduct);

module.exports = router;