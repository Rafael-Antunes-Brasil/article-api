const articleService = require('../service/articles.service');

const findAll = async (req, res) => {
  try {
    const articles = await articleService.findAll();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const article = await articleService.getById(req.params.id)
    res.json(article);
  } catch (error) {
    if (error.message === 'Artigo não encontrado') {
      return res.status(404).json({ error: error.message });
    }

    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  findAll,
  findById
};