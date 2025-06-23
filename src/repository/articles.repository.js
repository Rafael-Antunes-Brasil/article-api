const { connect } = require("../database");
const { getFromCache, setCache } = require("../utils/cache");

const ARTICLES_CACHE_KEY = 'all_articles';

const findAll = async () => {
  const cachedArticles = getFromCache(ARTICLES_CACHE_KEY);

  if (cachedArticles) {
    return cachedArticles;
  }

  try {
    const db = await connect();

    const articles = await db.all(`
      SELECT
        *
      FROM
        articles
    `);

    setCache(ARTICLES_CACHE_KEY, articles);
    return articles;
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    throw error;
  }
};

const findById = async (id) => {
  try {
    const db = await connect();

    const article = await db.get(`
      SELECT
        *
      FROM
        articles
      WHERE
        id = ${id}
    `);

    return article;
  } catch (error) {
    console.error(`Erro ao buscar artigo com ID ${id}:`, error);
    throw error;
  }
};

module.exports = {
  findAll,
  findById
};