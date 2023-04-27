const express = require('express');
const { productController } = require('../controllers');
const validateNewProduct = require('../middlewares/validadeNewProduct');

const router = express.Router();

router.get(
  '/',
  productController.listProducts,
);

router.get(
  '/:id',
  productController.getProduct,
);

router.post(
  '/',
  validateNewProduct,
  productController.insertProduct,
);

module.exports = router;