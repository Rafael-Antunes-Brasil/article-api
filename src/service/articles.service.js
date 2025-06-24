const articleRepository = require('../repository/articles.repository');

async function findAll() {
    try {
        const articles = await articleRepository.findAll();
        return articles;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getById(id) {
    try {
        const articleId = Number(id);

        if (!articleId) throw new Error('Id do artigo inválido!');

        const article = await articleRepository.findById(articleId);

        if (!article) throw new Error('Artigo não encontrado');

        return article;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    findAll,
    getById
};
