var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
			},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=8192'
			},
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url'
            }
		]
	},
	plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};