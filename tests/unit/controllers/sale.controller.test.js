const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { saleService } = require('../../../src/services');
const { saleController } = require('../../../src/controllers');
const {
  salesList,
  salesListById,
  errorMessage,
} = require('./mocks/sale.controller.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('Verificando controller vendas cadastradas', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('findAllSales function', () => {
    it('Deve responder 200 e a lista de vendas', async () => {
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

  describe('findAllSalesById', () => {
    it('Deve responder 200 e a lista de vendas por ID', async () => {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(saleService, 'findAllSalesById')
        .resolves({ type: null, message: salesListById });
      
      await saleController.findAllSalesById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(salesListById);
    });

    it('Deve responder 404 e a mensagem "Sale not found"', async () => {
      const res = {};
      const req = {
        params: { id: 99 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(saleService, 'findAllSalesById')
        .resolves(errorMessage);
      
      await saleController.findAllSalesById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
    });
  });
});