/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
	webpack: (config, { dev, isServer }) => {
		if (dev && !isServer) {
			config.module.rules.forEach((rule) => {
				if (rule.oneOf) {
					rule.oneOf.forEach((one) => {
						if (one.use && one.use.loader === 'mini-css-extract-plugin') {
							one.use.loader = 'style-loader'; // Remplace MiniCSSExtractPlugin par StyleLoader en mode dev
						}
					});
				}
			});
		}
		return config;
	},

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			},
		],
	},
};
