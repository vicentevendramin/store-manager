const { saleService } = require('../services');

const insertSale = async (req, res) => {
  const sales = req.body;

  const { type, message } = await saleService.insertSale(sales);

  if (type) return res.status(404).json({ message });

  res.status(201).json(message);
};

module.exports = {
  insertSale,
};