const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/static/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.html$/,
                use: ["vue-html-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'vue',
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
    ],
}