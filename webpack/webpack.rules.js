import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const babelRegex = /\.(js|ts)x?$/
const cssRegex = /\.css$/
const sassRegex = /\.(s(a|c)ss)$/
const ttfRegex = /\.ttf(\?v=\d+\.\d+\.\d+)?$/
const svgRegex = /\.svg(\?v=\d+\.\d+\.\d+)?$/
const imgRegex = /\.(?:ico|gif|png|jpg|jpeg|webp)$/

const devRules = [
	{
		test: babelRegex,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
			},
		},
	},
	{
		test: cssRegex,
		use: [
			{
				loader: 'style-loader',
			},
			{
				loader: 'css-loader',
				options: {
					modules: true,
					sourceMap: true,
					importLoaders: 1,
					localIdentName: '[name]',
					camelCase: true,
				},
			},
		],
	},
	{
		test: sassRegex,
		use: [
			{
				loader: MiniCssExtractPlugin.loader,
				options: {},
			},
			{
				loader: 'css-loader',
				options: {
					sourceMap: true,
					url: false,
				},
			},
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true,
					config: {
						path: 'postcss.config.js',
					},
				},
			},
			{
				loader: 'resolve-url-loader',
				options: { debug: true },
			},
			{
				loader: 'sass-loader',
				options: {
					sourceMap: true,
				},
			},
		],
	},
]

const sharedRules = [
	{
		test: ttfRegex,
		use: {
			loader: 'url-loader',
			options: {
				limit: 10000,
				mimetype: 'application/octet-stream',
			},
		},
	},
	{
		test: svgRegex,
		use: {
			loader: 'url-loader',
			options: {
				limit: 10000,
				mimetype: 'image/svg+xml',
			},
		},
	},
	{
		test: imgRegex,
		use: 'url-loader',
	},
]

export { devRules, sharedRules }
