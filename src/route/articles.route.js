const { Router } = require('express');
const { findAllArticles, findArticleById } = require('../controller/articles.controller');
const router = Router();

router.get('/', findAllArticles);
router.get('/:id', findArticleById);

module.exports = router;
