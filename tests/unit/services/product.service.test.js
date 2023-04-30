const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');
const {
  products,
  newProduct,
  product,
} = require('./mocks/product.service.mock');

describe('Verificando service produtos cadastrados', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('findAll function', () => {
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

  describe('findById function', () => {
    it('Retorna um erro caso o produto não exista', async () => {
      sinon.stub(productModel, 'findById').resolves(undefined);

      const result = await productService.findById(99);

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

  describe('insertProduct function', () => {
    it('Retorna um erro caso não declarado o nome do produto', async () => {
      sinon.stub(productModel, 'insert').resolves(4);
      sinon.stub(productModel, 'findById').resolves(product);

      const result = await productService.insertProduct(newProduct.name);

      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(product);
    });
  });
});