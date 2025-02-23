const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const {
  products,
  newProduct,
  product,
} = require('./mocks/product.model.mock');

describe('Testes de unidade do model de produtos cadastrados', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('findAll function', () => {
    it('Recuperando a lista de produtos cadastrados', async () => {
      // Arrange
      sinon.stub(connection, 'execute').resolves([products]);
      // Act
      const result = await productModel.findAll();
      // Assert
      expect(result).to.be.deep.equal(products);
    });
  });

  describe('findById function', () => {
    it('Recuperando um produto cadastrado a partir do seu id', async () => {
      // Arrange
      sinon.stub(connection, 'execute').resolves([[products[0]]]);
      // Act
      const result = await productModel.findById(1);
      // Assert
      expect(result).to.be.deep.equal(products[0]);
    });
  });

  describe('insert function', () => {
    it('Cadastrando um novo produto a partir do seu nome', async () => {
      // Arrange
      sinon.stub(connection, 'execute').resolves([{ insertId: product }]);
      // Act
      const result = await productModel.insert(newProduct.name);
      // Assert
      expect(result).to.equal(product);
    });
  });
});