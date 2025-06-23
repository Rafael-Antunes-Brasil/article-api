const express = require('express');
const app = express();
const { connect } = require('./database');
const articlesRoutes = require('./route/articles.route');

async function runMigrations(db) {
    const migrate = require('./migrations/001-create-articles-table');
    await migrate(db);
}

async function start() {
    try {
        const db = await connect();
        await runMigrations(db);

        app.use(express.json());
        app.use('/', articlesRoutes);

        const PORT = process.env.PORT || 3003;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar a aplicação:', error);
        process.exit(1);
    }
}

start();