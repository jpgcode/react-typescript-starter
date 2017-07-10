const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
    entry: './app/App.tsx',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.ProvidePlugin({
            "React": "react",
        })
    ],
    
}