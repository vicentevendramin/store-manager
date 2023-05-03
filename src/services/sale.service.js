const { productModel, saleModel } = require('../models');

const findAllSales = async () => {
  const sales = await saleModel.findAllSales();

  return { type: null, message: sales };
};

const findAllSalesById = async (id) => {
  const sales = await saleModel.findAllSalesById(id);

  if (sales.length < 1) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };

  return { type: null, message: sales };
};

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

const deleteSale = async (id) => {
  const sales = await saleModel.findAllSalesById(id);

  if (sales.length < 1) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };

  await saleModel.deleteSale(id);

  return { type: null, message: '' };
};
module.exports = {
  findAllSales,
  findAllSalesById,
  insertSale,
  deleteSale,
};