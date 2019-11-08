import path from 'path'
import webpack from 'webpack'
import { dependencies } from '../package.json'

export default {
	output: {
		path: path.join(__dirname, ''),
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs'],
		modules: ['src/', 'node_modules/'],
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'production',
		}),
		new webpack.NamedModulesPlugin(),
	],
	//externals: [...Object.keys(dependencies || {})],
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty',
		__dirname: false,
		__filename: false,
	},
	stats: {
		cached: false,
		cachedAssets: false,
		chunks: false,
		chunkModules: false,
		colors: true,
		hash: false,
		modules: false,
		reasons: false,
		timings: true,
		version: false,
	},
}
