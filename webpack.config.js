const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


let config = {
    entry: './src/index.js',
    output:{
        filename : 'main.js',
		path: path.resolve(__dirname, 'public'),
        assetModuleFilename: 'images/[name].[ext]',
    },
    resolve: {
		extensions: ['.js', '.jsx', '.png', '.jpg'],
        alias:{
            "@" : path.resolve("./src/"),
            "@css" : path.resolve("./src/style/"),
            "@image": path.resolve("./src/images/")
        }
    },
    module : {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader : 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    {loader : 'style-loader'},
                    {loader : 'css-loader'},
                ]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(MP4|webm|ogv|avi|ogg)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({}),
        new ESLintPlugin({}),
		new HtmlWebpackPlugin({template : './public/index.html', title : 'One-Admin - Votre partenaire de confiance', minify : false}),
        // Load .env file for environment variables in JS
        new Dotenv({
            path: "./.env"
        }),
    ]
}

module.exports = (env, args) =>{
    config.mode = args.mode

    if (args.mode === 'development'){
        config.devtool = 'inline-source-map',

        config.devServer ={
            static:{
                directory: path.resolve("./public")
            },
            client:{
                logging: 'warn',
                overlay : true
            },
            historyApiFallback : true,
            compress : true,
            port: 8080,
        },
        config.plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer : false,
                defaultSizes :'gzip'
            })
        )
    }

    if(args.mode === 'production'){
        config.devtool = false
        config.watch = false
        config.plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer : false,
                defaultSizes :'gzip',
                analyzerMode : 'static'
            })
        )
    }

    return config;
}
