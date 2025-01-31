import { Box, Card, CardContent, Typography, Divider } from '@mui/material';
import Image from 'next/image';

const SinglePost = ({ post }) => {
	return (
		<>
			<Card
				sx={{
					maxWidth: '800px',
					margin: 'auto',
					boxShadow: 3,
					borderRadius: 2,
					overflow: 'hidden',
					backgroundColor: '#f9f9f9',
				}}
			>
				{/* Image principale */}
				<Box sx={{ position: 'relative', width: '100%', height: '300px' }}>
					<Image
						src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg"
						alt=""
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</Box>

				{/* Contenu de l'article */}
				<CardContent
					sx={{
						padding: 3,
					}}
				>
					{/* Titre */}
					<Typography variant="h4" component="h1" gutterBottom>
						{post.title}
					</Typography>

					{/* Date */}
					<Typography
						variant="subtitle2"
						color="text.secondary"
						sx={{ marginBottom: 3 }}
					>
						01/11/3333
					</Typography>

					{/* Séparateur */}
					<Divider sx={{ marginBottom: 3 }} />

					{/* Contenu détaillé */}
					<Box>
						<Typography
							variant="body1"
							color="text.primary"
							sx={{ marginBottom: 2, lineHeight: 1.8 }}
						>
							{post.body}
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</>
	);
};

export default SinglePost;
