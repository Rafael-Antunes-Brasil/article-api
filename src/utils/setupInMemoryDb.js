const { connect } = require('../database');

async function setupInMemoryDb() {
    const db = await connect(':memory:');
    await db.exec(`
        CREATE TABLE IF NOT EXISTS articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            resume TEXT NOT NULL,
            author TEXT NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            publishDate DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);

    await db.run(`
        INSERT INTO articles (title, content, resume, author) VALUES
        ('Test Repo', 'Repo Content', 'Repo Resume', 'Repo Author');
    `);

    return db;
}

module.exports = {
    setupInMemoryDb
};
