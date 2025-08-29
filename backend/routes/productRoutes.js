const express = require('express');
const router = express.Router();
const {
  addProduct,
  editProduct,
  getProduct,
  getAllProducts,
  getProductsByCategory,
  getProductsBySubCategory,
  searchProducts,
  deleteProduct
} = require('../controllers/productController');

router.post('/add', addProduct);
router.put('/edit/:id', editProduct);
router.get('/search', searchProducts);
router.get('/category/:category/subcategory/:subCategory', getProductsBySubCategory);
router.get('/category/:category', getProductsByCategory);
router.get('/:id', getProduct);
router.get('/', getAllProducts);
router.delete('/:id', deleteProduct);

module.exports = router;