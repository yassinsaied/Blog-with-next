'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Alert, Button, TextField } from '@mui/material';
import { signIn } from 'next-auth/react';

export default function Login() {
	const [isClient, setIsClient] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setIsClient(true); // Quand le composant est monté côté client
	}, []);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		setLoading(true);
		setErrorMessage('');

		const res = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});

		setLoading(false);

		if (res?.error) {
			setErrorMessage('Login failed! Please check your credentials.');
		} else if (isClient) {
			router.push('/admin'); // Redirection uniquement côté client
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				backgroundColor: 'white',
			}}
		>
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
					width: '300px',
				}}
			>
				{errorMessage && <Alert severity="error">{errorMessage}</Alert>}
				<TextField
					label="Email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					variant="outlined"
					required
					fullWidth
				/>
				<TextField
					label="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					variant="outlined"
					required
					fullWidth
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					disabled={loading}
				>
					{loading ? 'Signing In...' : 'Sign In'}
				</Button>
			</form>
		</div>
	);
}
