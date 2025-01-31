import {
	Typography,
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Avatar,
	Stack,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import styles from './postCard.module.css';

const PostCard = ({ post }) => {
	return (
		<Box
			sx={{
				maxWidth: 300,
				flexWrap: 'wrap',
			}}
			xs={12}
			sm={6}
			md={4}
			lg={4}
		>
			<Card>
				<CardActionArea>
					<Box
						sx={{ position: 'relative', width: '100%', height: '150px' }}
					>
						<Image
							src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg"
							alt=""
							fill
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</Box>

					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{post.title}
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							{post.body.substring(0, 150)}
						</Typography>
					</CardContent>
					<CardActions sx={{ display: 'block' }}>
						<Link
							href={`/blog/${post.id}`}
							className={`${styles.readMore} buttonLink`}
							passHref
						>
							Lire la suite
						</Link>
					</CardActions>
				</CardActionArea>
				<CardActions>
					<Box
						sx={{
							justifyContent: 'space-between',
							alignItems: 'center',
							display: 'flex',
							width: '100%',
						}}
					>
						<Stack
							direction="row"
							spacing={1}
							sx={{
								justifyContent: 'flex-start',
								alignItems: 'center',
							}}
						>
							<Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />

							<Typography variant="subtitle2">Guy Clemons</Typography>
						</Stack>
						<Box>
							{' '}
							<Typography variant="subtitle2" color="textSecondary">
								May 14, 2020
							</Typography>
						</Box>
					</Box>
					<Box></Box>
				</CardActions>
			</Card>
		</Box>
	);
};

export default PostCard;
