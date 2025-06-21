const articleRepository = require('../repository/articles.repository');

const findAllArticles = async (req, res) => {
  try {
    const articles = await articleRepository.findAll();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findArticleById = async (req, res) => {
  try {
    const articleId = Number(req.params.id);

    if (!articleId) return res.status(500).json({ error: 'Id do artigo inválido!' });

    const article = await articleRepository.findById(articleId);

    if (!article) return res.status(404).json({ error: 'Artigo não encontrado' });

    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  findAllArticles,
  findArticleById
};