const { expect } = require('chai');
const sinon = require('sinon');
const { saleModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { salesList, salesListById } = require('./mocks/sale.model.mock');

describe('Testes de unidade do model de vendas cadastradas', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('findAllSales function', () => {
    it('Recuperando a lista de vendas cadastradas', async () => {
      sinon.stub(connection, 'execute').resolves([salesList]);

      const result = await saleModel.findAllSales();

      expect(result).to.deep.equal(salesList);
    });
  });

  describe('findAllSalesById function', () => {
    it('Recuperando a lista de vendas cadastradas por ID', async () => {
      sinon.stub(connection, 'execute').resolves([salesListById]);

      const result = await saleModel.findAllSalesById(1);

      expect(result).to.deep.equal(salesListById);
    });
  });
});