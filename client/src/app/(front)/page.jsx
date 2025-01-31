import Grid from '@mui/material/Grid2';
import { Typography, Stack, Button } from '@mui/material';
import Image from 'next/image';
import ProjectCard from '@/components/project/Project';

const Home = () => {
	return (
		<>
			<Grid
				container
				spacing={4}
				sx={{
					width: '90%',
					margin: '0 auto',
					flexWrap: 'wrap',
				}}
			>
				<Grid
					size={{ xs: 12, md: 7 }}
					px={10}
					sx={{
						boxSizing: 'border-box',
						paddingTop: '40px',
						px: { xs: 2, md: 10 },
						pt: { xs: 2, md: 10 },
					}}
				>
					<Typography
						variant="h1"
						sx={{
							maxWidth: '320px',
							wordWrap: 'break-word',
							lineHeight: '1.2',
							fontSize: {
								xs: '2rem', // Petite résolution
								sm: '2rem', // Résolution moyenne
								md: '2.5rem', // Résolution large
								lg: '3rem', // Résolution extra-large
							},
						}}
						gutterBottom
					>
						Creative Through Agency.
					</Typography>
					<Typography
						variant="body1"
						sx={{
							width: {
								xs: '90%', // Petite résolution
							},
						}}
						gutterBottom
					>
						body2. Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
					</Typography>
					<Stack spacing={2} direction="row">
						<Button variant="contained">Contained</Button>
						<Button variant="outlined">Outlined</Button>
					</Stack>
				</Grid>

				<Grid
					size={{ xs: 12, md: 5 }}
					sx={{
						display: { xs: 'none', md: 'block' }, // Masquer l'image sur les petits écrans
						position: 'relative',
					}}
				>
					<Image src="/hero.gif" alt="" height={400} width={400} />
				</Grid>
			</Grid>
			<ProjectCard />
		</>
	);
};

export default Home;
