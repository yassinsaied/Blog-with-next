// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';

// const authOptions = {
// 	providers: [
// 		CredentialsProvider({
// 			name: 'Credentials',
// 			credentials: {
// 				email: { label: 'Email', type: 'text' },
// 				password: { label: 'Password', type: 'password' },
// 			},
// 			async authorize(credentials) {
// 				const res = await fetch('http://localhost:5000/api/login', {
// 					method: 'POST',
// 					headers: { 'Content-Type': 'application/json' },
// 					body: JSON.stringify(credentials),
// 				});

// 				const data = await res.json();
// 				if (res.ok && data.token) {
// 					return { email: credentials.email, name: 'User' }; // Exemple de données utilisateur
// 				}
// 				return null;
// 			},
// 		}),
// 	],
// };

// export async function GET(req) {
// 	return NextAuth(authOptions)(req);
// }

// export async function POST(req) {
// 	return NextAuth(authOptions)(req);
// }

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// Appel à ton API Express pour vérifier les identifiants
				const res = await fetch('http://localhost:5000/api/auth/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(credentials),
				});

				const user = await res.json();

				// Si les identifiants sont valides
				if (res.ok && user) {
					console.log('sss', user, res.ok);
					return user; // Renvoie l'utilisateur
				}

				// Si la connexion échoue
				throw new Error('Invalid email or password');
			},
		}),
	],
	pages: {
		signIn: '/login', // Page pour se connecter
	},
	secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
