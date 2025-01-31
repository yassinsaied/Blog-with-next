import * as React from 'react';
import { Box, Link, Typography, Container, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

export default function Footer() {
	return (
		<Box
			sx={{
				width: '90%',
				margin: '0 auto',
				flexWrap: 'wrap',
				justifyContent: { xs: 'start', sm: 'space-between' },

				alignItems: 'center',
				justifyContent: 'center',
			}}
			size={{ xs: 12, md: 10, lg: 12 }}
		>
			<Grid container spacing={{ xs: 3, sm: 6, md: 15, lg: 25 }}>
				<Grid size={{ xs: 12, sm: 4, md: 4, lg: 5 }}>
					<Typography variant="h6" gutterBottom>
						About Us
					</Typography>
					<Typography variant="body2">
						We are XYZ company, dedicated to providing the best service to
						our customers.
					</Typography>
				</Grid>
				<Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }}>
					<Typography variant="h6" gutterBottom>
						Contact Us
					</Typography>
					<Typography variant="body2">
						123 Main Street, Anytown, USA
					</Typography>
					<Typography variant="body2">Email: info@example.com</Typography>
					<Typography variant="body2">Phone: +1 234 567 8901</Typography>
				</Grid>
				<Grid size={{ xs: 12, sm: 4, md: 4, lg: 3 }}>
					<Typography variant="h6" gutterBottom>
						Follow Us
					</Typography>
					<Link href="https://www.facebook.com/" color="inherit">
						<Facebook />
					</Link>
					<Link
						href="https://www.instagram.com/"
						color="inherit"
						sx={{ pl: 1, pr: 1 }}
					>
						<Instagram />
					</Link>
					<Link href="https://www.twitter.com/" color="inherit">
						<Twitter />
					</Link>
				</Grid>
			</Grid>
			<Box mt={5}>
				<Typography variant="body2" color="text.secondary" align="center">
					{'Copyright © '}
					<Link color="inherit" href="https://your-website.com/">
						Your Website
					</Link>{' '}
					{new Date().getFullYear()}
					{'.'}
				</Typography>
			</Box>
		</Box>
	);
}
