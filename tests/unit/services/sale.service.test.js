const { expect } = require('chai');
const sinon = require('sinon');
const { saleService } = require('../../../src/services');
const { saleModel } = require('../../../src/models');
const { salesList } = require('./mocks/sale.service.mock');

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
});