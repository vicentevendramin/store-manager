const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productService } = require('../../../src/services');
const { productController } = require('../../../src/controllers');
const {
  products,
  newProduct,
  product,
} = require('./mocks/product.controller.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('Verificando controller produtos cadastrados', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('findAll function', () => {
    it('Deve retornar o status 200 e a lista', async () => {
      // Arrange
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, 'findAll')
        .resolves({ type: null, message: products });
      
      // Act
      await productController.listProducts(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(products);
    });
  });

  describe('findById function', () => {
    it('Deve responder 200 e o produto desejado', async () => {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, 'findById')
        .resolves({ type: null, message: products[0] });
      
      await productController.getProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(products[0]);
    });

    it('Deve responder 404 e "Product not found" como mensagem', async () => {
      const res = {};
      const req = {
        params: { id: 10 },
      };

      const errorMessage = 'Product not found';

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, 'findById')
        .resolves({ type: 'PRODUCT_NOT_FOUND', message: errorMessage });
      
      await productController.getProduct(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: errorMessage });
    });
  });

  describe('insertProduct function', () => {
    it('Deve responder 201 e o produto adicionado', async () => {
      const res = {};
      const req = {
        body: newProduct,
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, 'insertProduct')
        .resolves({ type: null, message: product });
      
      await productController.insertProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(product);
    });
  });
});