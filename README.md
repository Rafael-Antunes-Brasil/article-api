# 📰 Articles API

API RESTful para listagem e consulta de artigos. Desenvolvida com Node.js, Express, SQLite e Docker.

---

## 📦 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- JavaScript (ES6+)

## 📁 Estrutura do projeto

ARTICLES-API/
├── src/
│   ├── controller/           # Controllers da aplicação
│   ├── repository/           # Acesso ao banco de dados (DAO)
│   ├── route/                # Definição das rotas
│   ├── utils/                # Utilitários (ex: cache)
│   ├── migrations/           # Migrations do banco de dados
│   ├── app.js                # Inicialização da aplicação
│   ├── database.js           # Conexão com o SQLite (modo async)
│   ├── db.js                 # (opcional, pode ser o SQLite tradicional)
├── .dockerignore
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── README.md


## 🚀 Como rodar o projeto

### Pré-requisitos

Antes de iniciar, você precisa ter instalado:

- [Node.js v18+](https://nodejs.org/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

- Obs.: Projeto foi feito no Windows 11

---

### 🔧 Subindo com Docker

```bash
# Clonar o repositório
git clone https://github.com/Rafael-Antunes-Brasil/articles-api.git
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

🧪 Testes
(Se houver testes futuramente, adicionar aqui)
