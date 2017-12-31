const express = require('express');
const router = express.Router();
const Article = require('../models/article');
let env = require('../../config/config')

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  const articles = [new Article(), new Article()];
  res.render('index', {
    title: env.app.name,
    articles: articles
  });
});
