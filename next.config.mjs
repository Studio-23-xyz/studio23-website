/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	basePath: isGithubPages ? "/studio23-website" : "",
};

export default nextConfig;
