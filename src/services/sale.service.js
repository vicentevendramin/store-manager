const { productModel, saleModel } = require('../models');

const insertSale = async (sales) => {
  const getAllProducts = await productModel.findAll();
  const sale = sales
    .every((s) => getAllProducts.some((p) => s.productId === p.id));
  
  if (!sale) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const saleId = await saleModel.insertSale();

  const insertSalePromise = sales.map(async ({ productId, quantity }) => {
    await saleModel.insertSaleProduct({ saleId, productId, quantity });
  });

  await Promise.all(insertSalePromise);
  return { type: null, message: { id: saleId, itemsSold: sales } };
};

module.exports = {
  insertSale,
};