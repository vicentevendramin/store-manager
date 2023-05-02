const { productModel } = require('../models');

const findAll = async () => {
  const products = await productModel.findAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const product = await productModel.findById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: product };
};

const insertProduct = async (name) => {
  const newProductId = await productModel.insert(name);
  const newProduct = await productModel.findById(newProductId);

  return { type: null, message: newProduct };
};

const updateProduct = async (name, id) => {
  const product = await productModel.findById(id);

  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const productUpdate = await productModel.update(name, id);

  return { type: null, message: productUpdate };
};

const deleteProduct = async (id) => {
  const product = await productModel.findById(id);

  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await productModel.deleteProduct(id);

  return { type: null, message: '' };
};

module.exports = {
  findAll,
  findById,
  insertProduct,
  updateProduct,
  deleteProduct,
};