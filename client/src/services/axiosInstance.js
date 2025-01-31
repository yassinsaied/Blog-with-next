// services/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com', // URL de base pour toutes les requêtes
	timeout: 10000, // Temps limite pour les requêtes (10 secondes)
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axiosInstance;
