const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return result;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [productId],
  );
  return product;
};

const insert = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);',
    [name],
  );
  return insertId;
};

const update = async (name, id) => {
  const [{ insertId }] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?;',
    [name, id],
  );
  return {
    id: insertId,
    name,
  };
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
};