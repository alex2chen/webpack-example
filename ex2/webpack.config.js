var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: {
        m1: './m1.js',
        m2: './m2.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    plugins: [
		//提供公共代码
        new webpack.optimize.CommonsChunkPlugin('common')
    ]
};