'use client';

import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<SessionProvider>
					<Navbar />
					<>{children}</>
					<Footer />
				</SessionProvider>
			</body>
		</html>
	);
}
