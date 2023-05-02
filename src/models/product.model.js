const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products;',
  );
  return result;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?;',
    [productId],
  );
  return product;
};

const insert = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?);',
    [name],
  );
  return insertId;
};

const update = async (name, id) => {
  const [{ insertId }] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?;',
    [name, id],
  );
  return {
    id: insertId,
    name,
  };
};

const deleteProduct = async (id) => {
  await connection.execute(
    'DELETE FROM products WHERE id = ?;',
    [id],
  );
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
  deleteProduct,
};