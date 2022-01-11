/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		loader: "imgix",
		path:
			process.env.NODE_ENV === "production"
				? "https://pankornch.github.io"
				: "http://0.0.0.0:3000",
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		})

		return config
	},
}
