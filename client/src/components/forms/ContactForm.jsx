'use client';

import { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import Grid from '@mui/material/Grid2';
import styles from './contactforms.module.css';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [formErrors, setFormErrors] = useState({});
	const [success, setSuccess] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const validate = () => {
		const errors = {};
		if (!formData.name.trim()) errors.name = 'Le nom est requis';
		if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
			errors.email = 'Un email valide est requis';
		if (!formData.subject.trim()) errors.subject = 'Le sujet est requis';
		if (!formData.message.trim()) errors.message = 'Le message est requis';
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = validate();
		setFormErrors(errors);
		if (Object.keys(errors).length === 0) {
			console.log('Form Data:', formData); // Remplacez par une API ou une logique d'envoi
			setSuccess(true);
			setFormData({ name: '', email: '', subject: '', message: '' });
		}
	};

	return (
		<Box
			sx={{
				maxWidth: '600px',
				margin: '0 auto',
				padding: '20px',

				borderRadius: '8px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
			}}
		>
			<Typography
				variant="h4"
				align="center"
				gutterBottom
				sx={{ color: 'white', fontWeight: 'bold' }}
			>
				Contactez-nous
			</Typography>

			{success && (
				<Alert severity="success" sx={{ mb: 2 }}>
					Votre message a été envoyé avec succès !
				</Alert>
			)}

			<form onSubmit={handleSubmit}>
				<Grid>
					<Grid xs={12}>
						<TextField
							fullWidth
							label="Nom"
							name="name"
							value={formData.name}
							onChange={handleChange}
							error={!!formErrors.name}
							helperText={formErrors.name}
							variant="outlined"
							className={styles.customTextfield}
						/>
					</Grid>
					<Grid xs={12}>
						<TextField
							fullWidth
							label="Email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							error={!!formErrors.email}
							helperText={formErrors.email}
							variant="outlined"
							className={styles.customTextfield}
						/>
					</Grid>
					<Grid xs={12}>
						<TextField
							fullWidth
							label="Sujet"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							error={!!formErrors.subject}
							helperText={formErrors.subject}
							variant="outlined"
							className={styles.customTextfield}
						/>
					</Grid>
					<Grid xs={12}>
						<TextField
							fullWidth
							label="Message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							error={!!formErrors.message}
							helperText={formErrors.message}
							multiline
							rows={4}
							variant="outlined"
							className={styles.customTextfield}
						/>
					</Grid>
					<Grid xs={12}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							sx={{
								backgroundColor: '#1976d2',
								'&:hover': { backgroundColor: '#1565c0' },
								fontWeight: 'bold',
								fontSize: '16px',
							}}
						>
							Envoyer
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};

export default ContactForm;
