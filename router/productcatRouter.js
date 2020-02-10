const express = require('express')
const {productcatController} = require('../controller')
const router = express.Router();

router.get('/getproductcat', productcatController.getAllproductcat)
router.get('/getproducts', productcatController.getproducts)
router.get('/getcategories', productcatController.getproducts)
// router.get('/getcategories', productcatController.getcategories)
// router.post('/add', productController.addProductcat);
router.delete('/delete/:idproduct', productcatController.deleteProductcat)
// router.put('/edit/:id', productController.editProductcat);

module.exports = router;