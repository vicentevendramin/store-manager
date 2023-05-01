const { expect } = require('chai');
const sinon = require('sinon');
const { saleService } = require('../../../src/services');
const { saleModel } = require('../../../src/models');
const {
  salesList,
  salesListById,
  errorMessage,
} = require('./mocks/sale.service.mock');

describe('Verificando service vendas cadastradas', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('findAllSales function', () => {
    it('Recuperando a lista de vendas cadastradas', async () => {
      sinon.stub(saleModel, 'findAllSales').returns(salesList);

      const result = await saleService.findAllSales();

      expect(result.type).to.be.equal(null);
      expect(result.message).to.be.deep.equal(salesList);
    });
  });

  describe('findAllSalesById', () => {
    it('Recuperando a lista de vendas cadastradas por ID', async () => {
      sinon.stub(saleModel, 'findAllSalesById').returns(salesListById);

      const result = await saleService.findAllSalesById(1);

      expect(result.type).to.be.equal(null);
      expect(result.message).to.be.deep.equal(salesListById);
    });

    it('Retorna um erro caso a venda não exista', async () => {
      sinon.stub(saleModel, 'findAllSalesById').returns([]);

      const result = await saleService.findAllSalesById(99);

      expect(result.type).to.be.equal(errorMessage.type);
      expect(result.message).to.be.equal(errorMessage.message);
    });
  });
});