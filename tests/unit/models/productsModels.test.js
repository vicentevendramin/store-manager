const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { products } = require('./mocks/product.model.mock');

describe('Testes de unidade do model de produtos cadastrados', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Recuperando a lista de produtos cadastrados', async () => {
    // Arrange
    sinon.stub(connection, 'execute').resolves([products]);
    // Act
    const result = await productModel.findAll();
    // Assert
    expect(result).to.be.deep.equal(products);
  });

  it('Recuperando um produto cadastrado a partir do seu id', async () => {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    // Act
    const result = await productModel.findById(1);
    // Assert
    expect(result).to.be.deep.equal(products[0]);
  });
});