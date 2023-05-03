const { saleService } = require('../services');

const findAllSales = async (_req, res) => {
  const { message } = await saleService.findAllSales();

  res.status(200).json(message);
};

const findAllSalesById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await saleService.findAllSalesById(id);

  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

const insertSale = async (req, res) => {
  const sales = req.body;

  const { type, message } = await saleService.insertSale(sales);

  if (type) return res.status(404).json({ message });

  res.status(201).json(message);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const sales = req.body;

  const { type, message } = await saleService.updateSale(id, sales);

  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await saleService.deleteSale(id);

  if (type) return res.status(404).json({ message });

  res.status(204).json(message);
};

module.exports = {
  findAllSales,
  findAllSalesById,
  insertSale,
  deleteSale,
  updateSale,
};