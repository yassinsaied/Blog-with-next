import React from 'react';
import {
	Card,
	CardContent,
	Box,
	Typography,
	CardActionArea,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

// Données de projet fictives
const projects = [
	{
		id: 1,
		title: 'Projet 1',
		description:
			'Un diginaute résolu à vous accompagner dans la croissance de votre entreprise le plus efficacement possible',
		image: '/commercial.svg',
	},
	{
		id: 2,
		title: 'Projet 2',
		description:
			'Un diginaute de votre entreprise le plus efficacement possible, dans la durée et pour vous garantir un ROI convaincant..',
		image: '/gagnant.svg',
	},
	{
		id: 3,
		title: 'Projet 3',
		description:
			'la croissance de votre entreprise le plus efficacement possible, dans la durée et pour vous garantir un ROI convaincant.',
		image: '/diginaute-planete.svg',
	},
	{
		id: 4,
		title: 'Projet 4',
		description: 'Un diginaute résolu vous garantir un ROI convaincant..',
		image: '/reactivite-exp.svg',
	},
];

const ProjectCard = () => {
	return (
		<Grid
			container
			spacing={10}
			justifyContent="center"
			alignItems="center"
			sx={{
				flexWrap: 'wrap',
				backgroundColor: 'white',
			}}
			py={5}
			my={5}
		>
			{projects.map((project) => (
				<Box
					sx={{
						maxWidth: 220,

						alignItems: 'stretch',
						flexWrap: 'wrap',
					}}
					xs={12}
					sm={6}
					md={3}
					lg={3}
					key={project.id}
				>
					<Card
						sx={{
							flex: 1, // Permet à toutes les cartes de s'étendre
							display: 'flex',
							flexDirection: 'column',
							flexWrap: 'wrap',
							backgroundColor: 'white',
							minHeight: 300,
						}}
					>
						<CardActionArea
							sx={{
								flex: 1,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'flex-start',
							}}
						>
							{/* Image du projet */}
							<Image
								src={project.image}
								alt=""
								height={150}
								width={150}
							/>
							<CardContent>
								{/* Titre et description du projet */}
								<Typography gutterBottom variant="h5" component="div">
									{project.title}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{project.description}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Box>
			))}
		</Grid>
	);
};

export default ProjectCard;
