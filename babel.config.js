module.exports = api => {
	const development = api.env(['development', 'test'])

	return {
		presets: [
			[
				require('@babel/preset-env'),
				{
					targets: {
						esmodules: true,
					},
					useBuiltIns: 'usage',
					corejs: '3',
				},
			],
			[require('@babel/preset-react'), { development }],
			require('@babel/preset-typescript'),
		],
		plugins: [
			require('@babel/plugin-transform-modules-commonjs'),
			require('@babel/plugin-transform-arrow-functions'),
			require('@babel/plugin-transform-destructuring'),
			require('@babel/plugin-transform-classes'),

			require('@babel/plugin-proposal-function-bind'),
			require('@babel/plugin-proposal-export-default-from'),
			require('@babel/plugin-proposal-logical-assignment-operators'),
			[require('@babel/plugin-proposal-optional-chaining'), { loose: false }],
			[require('@babel/plugin-proposal-decorators'), { legacy: true }],
			require('@babel/plugin-proposal-function-sent'),
			require('@babel/plugin-proposal-export-namespace-from'),
			require('@babel/plugin-proposal-numeric-separator'),
			require('@babel/plugin-proposal-throw-expressions'),
			[require('@babel/plugin-proposal-class-properties'), { loose: true }],
			require('@babel/plugin-proposal-json-strings'),
			require('@babel/plugin-proposal-object-rest-spread'),

			require('@babel/plugin-syntax-dynamic-import'),
			require('@babel/plugin-syntax-import-meta'),

			require('babel-plugin-macros'),
		],
	}
}
