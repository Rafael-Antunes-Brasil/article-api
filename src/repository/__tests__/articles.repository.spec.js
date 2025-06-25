const { setupInMemoryDb } = require('../../utils/setupInMemoryDb');
const articleRepository = require('../articles.repository');

jest.mock('../../utils/cache', () => ({
    getFromCache: jest.fn(),
    setCache: jest.fn(),
}));

const { getFromCache, setCache } = require('../../utils/cache');

let db;

beforeAll(async () => {
    db = await setupInMemoryDb();
});

beforeEach(async () => {
    await db.run('DELETE FROM articles');

    await db.run(`
        INSERT INTO
            articles (id, title, content, resume, author)
        VALUES
            (1, 'Teste', 'Conteúdo 1', 'Resumo 1', 'Autor 1'),
            (2, 'Outro artigo', 'Conteúdo 2', 'Resumo 2', 'Autor 2')
    `);
});

afterEach(() => {
    jest.clearAllMocks();
});

describe('articleRepository.findAll', () => {
    it('deve retornar artigos do cache se houver', async () => {
        const cachedData = [{ id: 99, title: 'Cache', content: 'Conteúdo' }];
        getFromCache.mockReturnValue(cachedData);

        const result = await articleRepository.findAll();

        expect(getFromCache).toHaveBeenCalledWith('all_articles');
        expect(result).toEqual(cachedData);
        expect(setCache).not.toHaveBeenCalled();
    });

    it('deve buscar do banco e salvar no cache se cache não existir', async () => {
        getFromCache.mockReturnValue(null);

        const result = await articleRepository.findAll();

        expect(getFromCache).toHaveBeenCalledWith('all_articles');
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
        expect(setCache).toHaveBeenCalledWith('all_articles', result);
    });
});

describe('articleRepository.findById', () => {
    it('deve retornar o artigo com ID existente', async () => {
        const article = await articleRepository.findById(1);

        expect(article).toBeDefined();
        expect(article.id).toBe(1);
        expect(article.title).toBe('Teste');
    });

    it('deve retornar undefined para ID inexistente', async () => {
        const article = await articleRepository.findById(999);
        expect(article).toBeUndefined();
    });
});
