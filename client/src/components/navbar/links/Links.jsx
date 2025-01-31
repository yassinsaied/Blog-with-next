import Link from 'next/link';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import styles from './links.module.css';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const Links = ({ vertical, handleCloseNavMenu, linksList }) => {
	const pathname = usePathname();
	const handleItemClick = (item) => {
		if (item.type === 'logout') {
			signOut({ callbackUrl: '/login' }); // Redirection après déconnexion
		}
	};

	return (
		<>
			{vertical
				? linksList.map((link, index) => {
						const IconComponent = link.icon; // Récupère le composant d'icône dynamique
						return (
							<MenuItem key={index} onClick={handleCloseNavMenu}>
								{link.type === 'logout' ? (
									<button
										onClick={() => handleItemClick(link)}
										style={{
											display: 'flex',
											alignItems: 'center',
											border: 'none',
											background: 'none',
											cursor: 'pointer',
										}}
									>
										{IconComponent && (
											<IconComponent sx={{ marginRight: 1 }} />
										)}
										{link.title}
									</button>
								) : (
									<Link
										href={link.url}
										className={`${styles.link} ${styles.submenuLink}`}
									>
										<Typography
											sx={{
												textAlign: 'center',
												textDecoration: 'none',
												color: 'inherit',
											}}
										>
											{IconComponent && (
												<IconComponent sx={{ marginRight: 1 }} />
											)}
											{link.title}
										</Typography>
									</Link>
								)}
							</MenuItem>
						);
				  })
				: linksList.map((link, index) => {
						const IconComponent = link.icon; // Récupère le composant d'icône dynamique
						return (
							<Link
								href={link.url}
								className={`${styles.link} ${
									pathname === link.url && styles.active
								}`}
								key={index}
							>
								{IconComponent && <IconComponent />}
								<Typography
									variant="subtitle2"
									sx={{ textAlign: 'center' }}
								>
									{link.title}
								</Typography>
							</Link>
						);
				  })}
		</>
	);
};

export default Links;
