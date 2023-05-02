const { productService } = require('../services');

const listProducts = async (_req, res) => {
  const { message } = await productService.findAll();

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

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const { type, message } = await productService.updateProduct(name, id);

  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productService.deleteProduct(id);

  if (type) return res.status(404).json({ message });

  res.status(204);
};

module.exports = {
  listProducts,
  getProduct,
  insertProduct,
  updateProduct,
  deleteProduct,
};