import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import dynamic from 'next/dynamic';

export const metadata = {
	title: 'Contact page Blog',
	description: 'Page de contact',
};

const ContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
	ssr: false,
});
const Contact = () => {
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
					size={{ xs: 12, md: 6 }}
					mt={8}
					sx={{
						display: { xs: 'none', md: 'block' }, // Masquer l'image sur les petits écrans
						position: 'relative',
						pt: { md: 6 },
					}}
				>
					<Image src="/contact.png" alt="" height={400} width={400} />
				</Grid>

				<Grid
					size={{ xs: 12, md: 6 }}
					sx={{
						boxSizing: 'border-box',
						paddingTop: '40px',
						px: { xs: 2 },
						pt: { xs: 2, md: 10 },
					}}
				>
					<ContactForm />
				</Grid>
			</Grid>
		</>
	);
};

export default Contact;
