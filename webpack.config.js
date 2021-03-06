const path = require('path');
const webpack = require('webpack');

// ES5 Syntax
module.exports = {
    entry: './src/Index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(mode_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"]}
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
        devServer: {
            contentBase: path.join(__dirname, 'public/'),
            port: 3000,
            publicPath: 'http://localhost:3000/dist/',
            hotOnly: true
        },
        plugins: [new webpack.HotModuleReplacementPlugin()]
};
