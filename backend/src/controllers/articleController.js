const Article = require('../models/Article'); // Assurez-vous que le modèle existe et est correct

// Fonction pour récupérer tous les articles
exports.getArticles = async (req, res) => {
	try {
		// Récupérer les articles de la base de données
		const articles = await Article.find().populate('author', 'name'); // Si 'author' est une référence à un autre modèle
		res.status(200).json(articles); // Réponse avec les articles récupérés
	} catch (err) {
		res.status(500).json({ message: err.message }); // Si une erreur se produit, on renvoie un message d'erreur
	}
};

// Fonction pour créer un nouvel article
exports.createArticle = async (req, res) => {
	const { title, content } = req.body; // On récupère le titre et le contenu de la requête

	if (!title || !content) {
		return res
			.status(400)
			.json({ message: 'Title and content are required' }); // Si l'un des champs est manquant
	}

	try {
		// Créer un nouvel article avec les données reçues
		const article = new Article({
			title,
			content,
			author: req.user.id, // On associe l'article à l'utilisateur connecté
		});

		// Sauvegarder l'article dans la base de données
		await article.save();
		res.status(201).json(article); // Réponse avec l'article créé
	} catch (err) {
		res.status(500).json({ message: err.message }); // Si une erreur se produit
	}
};
