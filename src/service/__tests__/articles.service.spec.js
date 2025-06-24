const articleService = require('../articles.service');
const articleRepository = require('../../repository/articles.repository');

jest.mock('../../repository/articles.repository');

describe('Testes unitários para article.service', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('findAll deve retornar lista de artigos', async () => {
        articleRepository.findAll.mockResolvedValue([{ id: 1, title: 'Artigo Mock' }]);
        const result = await articleService.findAll();
        expect(result).toEqual([{ id: 1, title: 'Artigo Mock' }]);
    });

    test('getById deve retornar artigo existente', async () => {
        articleRepository.findById.mockResolvedValue({ id: 1, title: 'Artigo Mock' });
        const result = await articleService.getById(1);
        expect(result).toEqual({ id: 1, title: 'Artigo Mock' });
    });

    test('getById deve lançar erro para id inválido', async () => {
        await expect(articleService.getById('abc')).rejects.toThrow('Id do artigo inválido!');
    });

    test('getById deve lançar erro para artigo não encontrado', async () => {
        articleRepository.findById.mockResolvedValue(undefined);
        await expect(articleService.getById(999)).rejects.toThrow('Artigo não encontrado');
    });
});
