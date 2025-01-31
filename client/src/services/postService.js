// services/postService.js
import axiosInstance from './axiosInstance';

// Fonction pour récupérer tous les posts
export const fetchPosts = async () => {
	try {
		const response = await axiosInstance.get('/posts');
		return response.data;
	} catch (error) {
		console.error('Erreur lors de la récupération des posts :', error);
		throw error;
	}
};

// Fonction pour récupérer un post spécifique par ID
export const fetchPostById = async (id) => {
	try {
		const response = await axiosInstance.get(`/posts/${id}`);
		return response.data;
	} catch (error) {
		console.error(
			`Erreur lors de la récupération du post avec l'ID ${id} :`,
			error
		);
		throw error;
	}
};
