const { productService } = require('../services');

const listProducts = async (_req, res) => {
  const { message } = await productService.findAll();

  // if (type) return res.status(type).json(message);

  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.findById(id);

  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;

  const { message } = await productService.insertProduct(name);

  res.status(201).json(message);
};

module.exports = {
  listProducts,
  getProduct,
  insertProduct,
};