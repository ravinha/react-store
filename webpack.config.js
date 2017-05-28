function getDevTool() {
	if (process.env.NODE_ENV !== 'production') {
		return 'source-map'; //enables source map
	}

	return false;
}

module.exports = {
	entry: {
		main: './src/js/app.jsx'
	},
	output: {
		filename: './main.js'
	},
	devtool: getDevTool(),
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	plugins: []
};