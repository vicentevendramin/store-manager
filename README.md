# 🛍️ Store Manager

O **Store Manager** é uma API RESTful desenvolvida para gerenciar vendas no formato dropshipping. O sistema permite criar, visualizar, atualizar e deletar produtos e vendas, utilizando a arquitetura MSC (Model-Service-Controller) e o banco de dados MySQL.

---

## 📝 Sobre o Projeto

Este projeto foi desenvolvido para consolidar os conhecimentos sobre:

- **Arquitetura MSC**: Divisão do código em camadas para maior organização e manutenibilidade.
- **Banco de Dados MySQL**: Para armazenamento e gestão de dados de produtos e vendas.
- **Padrão REST**: Para construção de rotas e endpoints padronizados.
- **Testes Unitários**: Garantia de qualidade e funcionamento das funções nas camadas MSC.

---

## 🚀 Funcionalidades

- **Produtos**:
  - Criar um novo produto.
  - Listar todos os produtos.
  - Visualizar um produto específico.
  - Atualizar as informações de um produto.
  - Deletar um produto.

- **Vendas**:
  - Registrar uma nova venda.
  - Listar todas as vendas.
  - Visualizar uma venda específica.
  - Atualizar os detalhes de uma venda.
  - Deletar uma venda.

---

## 📂 Estrutura do Projeto

A organização do projeto segue a arquitetura MSC, com testes unitários para cada camada:

```plaintext
📁 src/
   ├── controllers/                     # Camada Controller
   │   ├── product.controller.js        # Lógica dos endpoints de produtos
   │   ├── sale.controller.js           # Lógica dos endpoints de vendas
   │   └── index.js                     # Exportação dos controllers
   │
   ├── middlewares/                     # Middlewares para validação
   │   ├── validateNewProduct.middleware.js
   │   └── validateNewSale.middleware.js
   │
   ├── models/                          # Camada Model
   │   ├── connection.js                # Configuração da conexão com o MySQL
   │   ├── product.model.js             # Operações no banco de dados (produtos)
   │   ├── sale.model.js                # Operações no banco de dados (vendas)
   │   └── index.js                     # Exportação dos models
   │
   ├── routers/                         # Definição de rotas
   │   ├── product.router.js            # Rotas para produtos
   │   ├── sale.router.js               # Rotas para vendas
   │   └── index.js                     # Exportação das rotas
   │
   ├── services/                        # Camada Service
   │   ├── product.service.js           # Regras de negócio (produtos)
   │   ├── sale.service.js              # Regras de negócio (vendas)
   │   └── index.js                     # Exportação dos serviços
   │
   ├── app.js                           # Configuração da aplicação
   └── server.js                        # Inicialização do servidor

📁 tests/                               # Testes Unitários
   └── unit/
       ├── controllers/                 # Testes para os controllers
       │   ├── product.controller.test.js
       │   ├── sale.controller.test.js
       │   └── mocks/                   # Mocks utilizados nos testes
       │
       ├── models/                      # Testes para os models
       │   ├── product.model.test.js
       │   ├── sale.model.test.js
       │   └── mocks/
       │
       └── services/                    # Testes para os serviços
           ├── product.service.test.js
           ├── sale.service.test.js
           └── mocks/
```

---

## 🛠️ Como Rodar o Projeto

1. Clone este repositório:

    ```bash
    git clone https://github.com/vicentevendramin/store-manager.git
    cd store-manager
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o banco de dados MySQL:

    - Certifique-se de que o MySQL está instalado e rodando.
    - Configure o arquivo `src/models/connection.js` com as credenciais do seu banco.

4. Execute o servidor:

    ```bash
    npm start
    ```

5. Para rodar os testes:

    ```bash
    npm run test
    ```
