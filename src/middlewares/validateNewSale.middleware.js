const validateFields = (req, res, next) => {
  const sales = req.body;

  const validateId = sales.some(({ productId }) => productId === null || productId === undefined);
  const validateQty = sales.some(({ quantity }) => quantity === null || quantity === undefined);
  
  if (validateId) return res.status(400).json({ message: '"productId" is required' });
  if (validateQty) return res.status(400).json({ message: '"quantity" is required' });

  next();
};

const validateQuantity = (req, res, next) => {
  const sales = req.body;

  const quantityValue = sales.some(({ quantity }) => quantity < 1);
  
  if (quantityValue) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = {
  validateFields,
  validateQuantity,
};