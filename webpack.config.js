const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: ['./src/index.js', './src/keyclass.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: {
            keep: /\.git/,
        },
    },
    mode: 'development',
    plugins: [new HtmlWebpackPlugin({
        title: 'Virtual keyboard',
        filename: 'index.html',
        template: './src/index.html'
    })],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        }, ]
    },
    devServer: {
        static: './dist',
        port: 3000,
    }
};