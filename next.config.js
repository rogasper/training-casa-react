/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'id'],
		defaultLocale: 'en',
	},
	images: {
		domains: [
			'source.unsplash.com',
			'picsum.photos',
			'plus.unsplash.com',
		],
	},
};

module.exports = nextConfig;
