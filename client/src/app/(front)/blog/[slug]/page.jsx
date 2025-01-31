import SinglePost from '@/components/singlePost/SinglePost';
import { fetchPostById } from '@/services/postService';

export async function generateMetadata({ params }) {
	// Extraire le slug des paramètres
	const { slug } = params;
	const post = await fetchPostById(slug);
	if (!post) {
		return {
			title: 'Article non trouvé | Mon Blog',
			description:
				"L'article que vous cherchez n'existe pas ou a été supprimé.",
		};
	}

	return {
		title: `${post.title}`,
		description: post.body.slice(0, 150), // Première partie du contenu pour la description
	};
}

const Post = async ({ params }) => {
	const { slug } = params;
	const post = await fetchPostById(slug);
	return <SinglePost post={post} />;
};

export default Post;
