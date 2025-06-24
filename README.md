# 📰 Articles API

API REST para listagem e consulta de artigos. Desenvolvida com Node.js, Express, SQLite e Docker.

---

## 📦 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/visionmedia/supertest)
- JavaScript (ES6+)

## 🚀 Como rodar o projeto

### Pré-requisitos

Antes de iniciar, você precisa ter instalado:

- [Node.js v18+](https://nodejs.org/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

ℹ️ Obs.: Projeto foi feito no Windows 11

---

### 🔧 Subindo com Docker

```bash
# Clonar o repositório
git clone https://github.com/Rafael-Antunes-Brasil/articles-api
cd articles-api

# Subir os containers
docker-compose up --build
A aplicação estará disponível em:
📍 http://localhost:3000/

📥 Endpoints disponíveis
GET / → Lista todos os artigos
GET /:id → Retorna artigo por ID

🗃️ Banco de Dados
O projeto utiliza SQLite com o arquivo database.sqlite.
Migrations são executadas automaticamente ao subir o projeto.
Durante os testes, é utilizado SQLite em memória para isolamento.

🧪 Testes de Integração
O projeto inclui testes de integração para controller e repository usando:
Jest (framework de testes)
Supertest (requisições simuladas)
SQLite em memória (ambiente limpo por teste)

▶️ Executar os testes:
npm install
npm test