const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = merge(baseConfig, {
    entry: {
        app: './src/entry-client.js'
    },

    //Since webpack v4, the CommonsChunkPlugin was removed in favor of optimization.splitChunks
    optimization: {
        splitChunks: {
            name: "mainfesy",
            minChunks: Infinity
        }
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: [
                isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                {
                    loader: 'css-loader'
                },
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new VueSSRClientPlugin(),
        new MiniCssExtractPlugin({
            filename: isProd ? '[name].[chunkhash].css' : '[name].css',
            chunkFilename: isProd ? '[id].[chunkhash].css': '[id].css'
        })
    ]
})