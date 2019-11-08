import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import WebpackBuildNotifierPlugin from 'webpack-build-notifier'

const devPlugins = [
	new MiniCssExtractPlugin({
		filename: '[name].css',
		chunkFilename: ({ id }) => `${id}.css`,
		moduleFilename: ({ name }) => `${name}.css`,
	}),
	new webpack.HotModuleReplacementPlugin({ multiStep: true }),
	new webpack.NoEmitOnErrorsPlugin(),
	new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
	new webpack.LoaderOptionsPlugin({ debug: true }),
]

const sharedPlugins = [
	new WebpackBuildNotifierPlugin({
		title: `Project built`,
		suppressWarning: true,
	}),
]

export { devPlugins, sharedPlugins }
