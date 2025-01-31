import {
	Person,
	AccountBalanceWallet,
	Dashboard,
	Settings,
	Logout,
} from '@mui/icons-material';
export const mainMenu = [
	{
		title: 'About',
		url: '/about',
		key: 'about',
	},
	{
		title: 'blog',
		url: '/blog',
		key: 'blog',
	},
	{
		title: 'Contact',
		url: '/contact',
		key: 'contact',
	},
];

export const userMenu = [
	{
		title: 'Profile',
		url: '/profile',
		key: 'person',
		icon: Person,
	},
	{
		title: 'Acount',
		url: '/acount',
		key: 'accountBalanceWallet',
		icon: AccountBalanceWallet,
	},
	{
		title: 'Dashboard',
		url: '/dashboard',
		key: 'dashboard',
		icon: Dashboard,
	},
	{
		title: 'Settings',
		url: '/settings',
		key: 'settings',
		icon: Settings,
	},
	{
		title: 'Logout',
		url: '#',
		key: 'logout',
		icon: Logout,
		type: 'logout',
	},
];
