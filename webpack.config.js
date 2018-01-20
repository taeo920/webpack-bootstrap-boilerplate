const webpack = require('webpack');
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const extract = require('extract-text-webpack-plugin');
const cleanup = require('webpack-extraneous-file-cleanup-plugin');

module.exports = {
	devtool: 'source-map',
	entry: {
		'scripts': './scripts/scripts.js',
		'styles': './styles/styles.scss',
		'admin-scripts': './scripts/admin.js',
		'admin-styles': './styles/admin.scss'
	},
	plugins: [
		new extract({
			filename: '../styles/[name].min.css'
		}),
		new cleanup({
			extensions: ['.js']
		}),
		new uglify({
			sourceMap: true
		}),
		new webpack.ProvidePlugin({
			Util: 'exports-loader?Util!bootstrap/js/dist/util',
		})
	],
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'dist/scripts')
	},
	module: {
		rules: [
			{
				test: require.resolve('jquery'),
				use: [
					{ loader: 'expose-loader', options: 'jQuery' },
					{ loader: 'expose-loader', options: '$' }
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env']
					}
				}
			},
			{
				test: /\.scss$/,
				use: extract.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true,
								sourceMap: true,
								url: false
							}
						},
						{ loader: 'postcss-loader' },
						{ loader: 'sass-loader' }
					]
				})
			}
		]
	}
};