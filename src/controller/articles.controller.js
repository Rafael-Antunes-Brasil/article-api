const articleService = require('../service/articles.service');

const findAllArticles = async (req, res) => {
  try {
    const articles = await articleService.findAllArticles();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findArticleById = async (req, res) => {
  try {
    const article = await articleService.getArticleById(req.params.id)
    res.json(article);
  } catch (error) {
    if (error.message === 'Artigo não encontrado') {
      return res.status(404).json({ error: error.message });
    }

    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  findAllArticles,
  findArticleById
};