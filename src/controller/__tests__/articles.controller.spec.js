const articleController = require('../articles.controller');
const articleService = require('../../service/articles.service');

jest.mock('../../service/articles.service');

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('articleController.findAll', () => {
    it('deve retornar a lista de artigos com status 200', async () => {
        const res = mockResponse();
        const req = {};

        articleService.findAll.mockResolvedValue([
            { id: 1, title: 'Título 1' },
            { id: 2, title: 'Título 2' }
        ]);

        await articleController.findAll(req, res);

        expect(res.json).toHaveBeenCalledWith([
            { id: 1, title: 'Título 1' },
            { id: 2, title: 'Título 2' }
        ]);
    });
});
