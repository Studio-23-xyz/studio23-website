/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	basePath: isGithubPages ? "/studio23-website" : "",
};

export default nextConfig;
