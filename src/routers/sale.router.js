const express = require('express');
const { saleController } = require('../controllers');
const {
  validateFields,
  validateQuantity,
} = require('../middlewares/validateNewSale.middleware');

const router = express.Router();

router.post(
  '/',
  validateFields,
  validateQuantity,
  saleController.insertSale,
);

module.exports = router;