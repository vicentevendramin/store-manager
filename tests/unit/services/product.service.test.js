const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');
const { products } = require('./mocks/product.service.mock');

describe('Verificando service produtos cadastrados', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('Listagem dos produtos cadastrados', () => {
    it('Retorna a lista completa de produtos cadastrados', async () => {
      // Arrange
      sinon.stub(productModel, 'findAll').resolves(products);
      // Act
      const result = await productService.findAll();
      // Assert
      expect(result.type).to.be.equal(null);
      expect(result.message).to.be.deep.equal(products);
    });
  });

  describe('Busca de um produto cadastrado', () => {
    it('Retorna um erro caso o produto não exista', async () => {
      const result = await productService.findById(10);

      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
    });

    it('Retorna o produto cadastrado caso ID existente', async () => {
      sinon.stub(productModel, 'findById').resolves(products[0]);

      const result = await productService.findById(1);

      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(products[0]);
    });
  });
});