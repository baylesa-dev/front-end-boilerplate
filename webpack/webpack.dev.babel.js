import path from 'path'
import merge from 'webpack-merge'

import baseConfig from './webpack.config'
import { devRules, sharedRules } from './webpack.rules'
import { devPlugins, sharedPlugins } from './webpack.plugins'

const host = 'localhost'
const port = process.env.PORT || 8877
const publicPath = `http://${host}:${port}/dist/`

export default merge.smart(baseConfig, {
	mode: 'development',
	target: 'web',
	entry: {
		App: './src/index.tsx',
	},
	output: {
		publicPath: publicPath,
		filename: '[name].js',
	},
	module: {
		rules: [...devRules, ...sharedRules],
	},
	plugins: [...devPlugins, ...sharedPlugins],
	devServer: {
		host,
		port,
		publicPath,
		compress: true,
		noInfo: false,
		inline: true,
		lazy: false,
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers':
				'X-Requested-With, content-type, Authorization',
		},
		contentBase: path.join(__dirname, '../src'),
		watchOptions: {
			aggregateTimeout: 300,
			ignored: /node_modules/,
			poll: 100,
		},
		historyApiFallback: {
			verbose: true,
			disableDotRule: false,
		},
	},
	watch: true,
	performance: {
		hints: false,
	},
	devtool: 'inline-source-map',
	optimization: {
		splitChunks: {
			cacheGroups: {
				react: {
					test: /[\\/]node_modules[\\/](react|react\-dom)[\\/]/,
					name: 'react.bundle',
					chunks: 'all',
					enforce: true,
				},
				vendors: {
					test: /[\\/]node_modules[\\/](?!(react|react\-dom))\S+[\\/]/,
					name: 'vendors.bundle',
					chunks: 'all',
				},
			},
		},
	},
})
