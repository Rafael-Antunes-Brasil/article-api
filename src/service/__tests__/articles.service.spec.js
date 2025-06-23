const request = require('supertest');
const { setupInMemoryDb } = require('../../utils/setupInMemoryDb');

let app, db;

beforeAll(async () => {
    db = await setupInMemoryDb();
});

describe('GET /', () => {
    it('deve retornar a lista de artigos', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe('GET /:id', () => {
    it('deve retornar o artigo existente', async () => {
        const res = await request(app).get('/1');

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('id', 1);
        expect(res.body).toHaveProperty('title', 'Título 1');
    });

    it('deve retornar 404 para artigo não encontrado', async () => {
        const res = await request(app).get('/999');

        expect(res.status).toBe(404);
        expect(res.body).toEqual({ error: 'Artigo não encontrado' });
    });

    it('deve retornar 500 para ID inválido', async () => {
        const res = await request(app).get('/abc');

        expect(res.status).toBe(500);
        expect(res.body).toEqual({ error: 'Id do artigo inválido!' });
    });
});
