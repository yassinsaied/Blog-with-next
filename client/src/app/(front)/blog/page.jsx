import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PostCard from '@/components/postCard/PostCard';
import SinglePost from '@/components/singlePost/SinglePost';
import { fetchPosts } from '@/services/postService';

export const metadata = {
	title: 'Latest Article and News',
	description: 'Breaking News, World News, Sports',
};

const BlogPage = async () => {
	const posts = await fetchPosts();

	return (
		<Grid
			spacing={4}
			sx={{
				width: '90%',
				margin: '20px auto',
				flexWrap: 'wrap',
			}}
			container
		>
			<Box
				xs={12}
				lg={12}
				sx={{
					width: '100%',
				}}
			>
				{' '}
				<Typography variant="h4" gutterBottom>
					Articles
				</Typography>
			</Box>

			<Grid container spacing={10}>
				{posts.map((post) => (
					<PostCard post={post} key={post.id} />
				))}
			</Grid>
		</Grid>
	);
};

export default BlogPage;
