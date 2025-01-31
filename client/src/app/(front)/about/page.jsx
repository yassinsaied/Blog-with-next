import Grid from '@mui/material/Grid2';
import { Typography, Stack, Box } from '@mui/material';
import Image from 'next/image';

const About = () => {
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
						variant="h3"
						sx={{
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
						You can build a Better, Bolder, Braver coaching business
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
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
						blanditiis tenetur unde suscipit, quam beatae rerum inventore
						consectetur, neque doloribus, cupiditate numquam dignissimos
						laborum fugiat deleniti? Eum quasi quidem quibusdam
					</Typography>
					<Stack
						direction="row"
						spacing={10}
						sx={{
							alignItems: 'unset', // Empêche les éléments d'avoir la même hauteur
						}}
					>
						<Box>
							<Typography
								variant="button"
								color={'primary'}
								sx={{
									display: 'block',
									fontSize: '30px',
									fontWeight: 'bold',
								}}
							>
								60 k+
							</Typography>
							<Typography
								variant="caption"
								gutterBottom
								sx={{ display: 'block' }}
							>
								Your experience
							</Typography>
						</Box>

						<Box>
							<Typography
								variant="button"
								color={'primary'}
								sx={{
									display: 'block',
									fontSize: '30px',
									fontWeight: 'bold',
								}}
							>
								500 k+
							</Typography>
							<Typography
								variant="caption"
								gutterBottom
								sx={{ display: 'block' }}
							>
								Peapole reched
							</Typography>
						</Box>
						<Box>
							<Typography
								variant="button"
								color={'primary'}
								sx={{
									display: 'block',
									fontSize: '30px',
									fontWeight: 'bold',
								}}
							>
								234 k+
							</Typography>
							<Typography
								variant="caption"
								gutterBottom
								sx={{ display: 'block' }}
							>
								Servic Plugin
							</Typography>
						</Box>
					</Stack>
				</Grid>

				<Grid
					size={{ xs: 12, md: 5 }}
					mt={8}
					sx={{
						display: { xs: 'none', md: 'block' }, // Masquer l'image sur les petits écrans
						position: 'relative',
					}}
				>
					<Image src="/about.png" alt="" height={400} width={400} />
				</Grid>
			</Grid>
		</>
	);
};

export default About;
