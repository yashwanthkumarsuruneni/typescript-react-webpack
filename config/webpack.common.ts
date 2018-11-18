import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';

const devMode = process.env.NODE_ENV !== 'production';

const APP_DIR = path.resolve(__dirname, '../src');

const pathsToClean = [
    'dist'
]
const cleanOptions = {
    root: process.cwd(),
    verbose: true,
    dry: false
}


const common : webpack.Configuration = {
    entry: {
        app: [APP_DIR]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader'
            } ,
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html'
        }),
    ]
}


export default common;