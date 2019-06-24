const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const globImporter = require('node-sass-glob-importer');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
	// `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
	// You can change the configuration based on that.
	// 'PRODUCTION' is used when building the static version of storybook.

	// Make whatever fine-grained changes you need
	// config.module.rules.push({
	//   test: /\.scss$/,
	//   use: 'import-glob-loader',
	//   enforce: "pre"
	// });
	config.module.rules.push({
		test: /\.scss$/,
		use: ['style-loader', 'css-loader', {
			loader: 'sass-loader',
			options: {
				importer: globImporter(),
				includePaths: ['theme/components/']
			}
		}]
	});
	config.resolve.alias = {
		...config.resolve.alias,
		"@components": path.resolve(__dirname, '../theme/components/'),
		"@theme": path.resolve(__dirname, '../theme/')
	}
	config.plugins.push(
		new ExtractTextPlugin({
			filename: 'style.css'
		})
	);

	// Return the altered config
	return config;
};