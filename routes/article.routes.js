const express = require('express');
const router = express.Router();
const controller = require('../controllers/article.controller');

router.get('/', controller.getAllArticles);
router.get('/:id', controller.getArticleById);
router.post('/', controller.createArticle);
router.delete('/:id', controller.deleteArticle);


module.exports = router;
