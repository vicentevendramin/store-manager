const express = require('express');
const { productController } = require('../controllers');
const validateNewProduct = require('../middlewares/validateNewProduct.middleware');

const router = express.Router();

router.get(
  '/:id',
  productController.getProduct,
);

router.put(
  '/:id',
  validateNewProduct,
  productController.updateProduct,
);

router.get(
  '/',
  productController.listProducts,
);

router.post(
  '/',
  validateNewProduct,
  productController.insertProduct,
);

module.exports = router;