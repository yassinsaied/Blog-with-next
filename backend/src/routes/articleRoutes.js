const express = require('express');
const {
	getArticles,
	createArticle,
} = require('../controllers/articleController');

const router = express.Router();

// Route pour récupérer tous les articles
router.get('/articles', getArticles);

// Route pour créer un nouvel article
router.post('/addArticle', createArticle);

module.exports = router;
