const connection = require('./connection');

const findAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT
      s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM
      StoreManager.sales AS s
    INNER JOIN
      StoreManager.sales_products AS sp
    WHERE
      s.id = sp.sale_id;`,
  );
  return sales;
};

const findAllSalesById = async (id) => {
  const [sales] = await connection.execute(
    `SELECT
      s.date, sp.product_id AS productId, sp.quantity
    FROM
      sales AS s
    INNER JOIN
      sales_products AS sp
    WHERE
      id = ?
    AND
      s.id = sp.sale_id;`,
    [id],
  );
  return sales;
};

// const findSaleById = async (saleId) => {
//   const [[sale]] = await connection.execute(
//     'SELECT * FROM StoreManager.sales WHERE id = ?;',
//     [saleId],
//   );
//   return sale;
// };

const insertSaleProduct = async ({ saleId, productId, quantity }) => {
  await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
    [saleId, productId, quantity],
  );
};

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUES (NOW());',
  );
  return insertId;
};

const deleteSale = async (id) => {
  await connection.execute(
    'DELETE FROM sales_products WHERE sale_id = ?;',
    [id],
  );
  await connection.execute(
    'DELETE FROM sales WHERE id = ?;',
    [id],
  );
};

module.exports = {
  findAllSales,
  findAllSalesById,
  // findSaleById,
  insertSaleProduct,
  insertSale,
  deleteSale,
};