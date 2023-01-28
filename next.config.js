/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: ['./src'],
		prependData: `@import "@/assets/styles/variables/index.scss";`
	}
};

module.exports = nextConfig;
