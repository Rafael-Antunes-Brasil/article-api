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

### Pré-requisitos

Antes de iniciar, você precisa ter instalado:

- [Node.js v18+](https://nodejs.org/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)

ℹ️ Obs.: Projeto foi feito no Windows 11

---

## 🚀 Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/Rafael-Antunes-Brasil/articles-api
cd articles-api

# Criar rede docker, para conexão entre api e front
docker network create projeto-network

# Subir os containers
docker-compose up -d --build
A aplicação estará disponível em:
📍 http://localhost:3003/

📥 Endpoints disponíveis
GET /articles → Lista todos os artigos
GET /articles:id → Retorna artigo por ID

🗃️ Banco de Dados
O projeto utiliza SQLite com o arquivo database.sqlite.
Migrations são executadas automaticamente ao subir o projeto.
Durante os testes, é utilizado SQLite em memória para isolamento.

🧪 Testes de Integração
O projeto inclui testes de integração para controller, service e repository usando:
Jest (framework de testes)
SQLite em memória (ambiente limpo por teste)

▶️ Executar os testes:
npm install
npm test