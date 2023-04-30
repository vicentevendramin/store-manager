const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { saleService } = require('../../../src/services');
const { saleController } = require('../../../src/controllers');
const { salesList } = require('./mocks/sale.controller.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('Verificando controller vendas cadastradas', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('findAllSales function', () => {
    it('Deve retornar o status 200 e a lista de vendas', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(saleService, 'findAllSales')
        .resolves({ type: null, message: salesList });
      
      await saleController.findAllSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(salesList);
    });
  });
});