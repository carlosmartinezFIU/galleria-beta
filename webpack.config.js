const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports ={
    mode: "production",
    entry:{
        home: path.resolve(__dirname, 'src/components/home.js'),
        navbar: path.resolve(__dirname,'src/components/navbar.js'),
        pageone: path.resolve(__dirname,'src/components/pageone.js'),
        four: path.resolve(__dirname, 'src/components/gallerypanels.js'),
    },
    output:{
       path: path.resolve(__dirname, "dist"),
       filename: "[name].[contenthash].js",
       clean: true,
    },
    devtool: "inline-source-map",
    devServer:{
        static: path.resolve(__dirname, 'dist'),
        watchFiles: [path.resolve(__dirname, 'src')],
        open: true,
        hot: true,

    },
    //loaders
    module:{
       rules:[
          //css
          {test: /\.css$/, use: ["style-loader", "css-loader"]},
          //images
          { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource', },
          //js for babel
          {
             test: /\.js$/,
             exclude: /node_modules/,
             use: {
                 loader: 'babel-loader',
                 options: {
                     presets: ['@babel/preset-env'],
                 },
             },
         },
       ]
    },
    //plugins
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temps/index.html'),
            chunks: ['home'],
            inject: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'slideshow.html',
            template: path.resolve(__dirname, 'src/temps/slideshow.html'),
            chunks: ['four'],
            inject: true,
        }),
    ],
 }