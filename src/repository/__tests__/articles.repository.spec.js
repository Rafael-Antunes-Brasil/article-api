const { setupInMemoryDb } = require('../../utils/setupInMemoryDb');
const articleRepository = require('../articles.repository');

let db;

beforeAll(async () => {
    db = await setupInMemoryDb();
});

describe('articleRepository.findAll', () => {
    it('deve retornar os artigos do banco', async () => {
        const result = await articleRepository.findAll();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
    });
});

describe('findById', () => {
    it('deve retornar o artigo com ID existente', async () => {
        const article = await articleRepository.findById(1);
        expect(article).toBeDefined();
        expect(article.title).toBe('Teste');
    });

    it('deve retornar undefined para ID inexistente', async () => {
        const article = await articleRepository.findById(999);
        expect(article).toBeUndefined();
    });

    it('deve lançar erro se o ID for inválido (SQL injection ou erro)', async () => {
        await expect(articleRepository.findById('abc')).rejects.toThrow();
    });
});
