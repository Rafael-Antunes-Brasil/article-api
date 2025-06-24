const { Router } = require('express');
const { findAll, findById } = require('../controller/articles.controller');
const router = Router();

router.get('/articles', findAll);
router.get('/articles/:id', findById);

module.exports = router;
