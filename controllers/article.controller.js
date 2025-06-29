const db = require('../models');
const Article = db.article;

exports.getAllArticles = async (req, res) => {
  const articles = await Article.findAll();
  res.json(articles);
};

exports.getArticleById = async (req, res) => {
  const article = await Article.findByPk(req.params.id);
  if (!article) return res.status(404).json({ message: 'Not found' });
  res.json(article);
};

exports.createArticle = async (req, res) => {
  const newArticle = await Article.create(req.body);
  res.status(201).json(newArticle);
};

exports.deleteArticle = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await db.article.destroy({ where: { id } });

    if (deleted) {
      res.json({ message: 'Article deleted' });
    } else {
      res.status(404).json({ error: 'Article not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

