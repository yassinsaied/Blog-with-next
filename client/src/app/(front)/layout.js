import { Inter } from 'next/font/google';

import { Box } from '@mui/material';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: {
		default: 'Home Blog',
		template: '%s | Next.js 14',
	},
	description:
		'"Projet personnel visant à explorer les fonctionnalités de Next.js, notamment le routage dynamique, le rendu côté serveur (SSR) et les API routes',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<Box sx={{ flexGrow: 1 }}>
					{children}
					<Footer />
				</Box>
			</body>
		</html>
	);
}
