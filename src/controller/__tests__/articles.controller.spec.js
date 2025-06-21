const request = require('supertest');
const express = require('express');
const { connect } = require('../../database');
const articlesRoutes = require('../../route/articles.route');

let app, db;

beforeAll(async () => {
    db = await connect(':memory:');

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
        ('Test Article', 'Content', 'Resume', 'Author');
    `);

    app = express();
    app.use(express.json());
    app.use('/', articlesRoutes);
});

describe('GET /', () => {
    it('deve retornar a lista de artigos', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
