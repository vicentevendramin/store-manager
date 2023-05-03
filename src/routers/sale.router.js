const express = require('express');
const { saleController } = require('../controllers');
const {
  validateFields,
  validateQuantity,
} = require('../middlewares/validateNewSale.middleware');

const router = express.Router();

router.get(
  '/',
  saleController.findAllSales,
);

router.get(
  '/:id',
  saleController.findAllSalesById,
);

router.put(
  '/:id',
  validateFields,
  validateQuantity,
  saleController.updateSale,
);

router.delete(
  '/:id',
  saleController.deleteSale,
);

router.post(
  '/',
  validateFields,
  validateQuantity,
  saleController.insertSale,
);

module.exports = router;