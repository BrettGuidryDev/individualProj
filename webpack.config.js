
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
    
    mode: process.env.NODE_ENV, 
    entry: "./index.js", 
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,    
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: [
                        '@babel/env',
                        '@babel/react',
                        ]
                    }
                }
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader',
              ],
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: './public/index.html'})],
    devServer: {
        static: {
            directory: path.resolve(__dirname, './public'),
            publicPath: 'public'
          },
          proxy: {
            '/': 'http//localhost:3000',
          },
        open: true,
        hot: true ,
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
}
