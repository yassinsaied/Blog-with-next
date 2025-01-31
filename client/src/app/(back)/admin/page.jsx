'use client';

import { useSession } from 'next-auth/react';

export default function AdminPage() {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <p>Chargement...</p>;
	}

	if (!session) {
		return <p>Accès refusé</p>;
	}

	return (
		<div>
			<h1>Bienvenue dans l'administration</h1>
			<p>Bienvenue, {session.user.name}</p>
		</div>
	);
}
