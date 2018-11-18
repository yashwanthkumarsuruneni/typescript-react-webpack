import * as webpackMerge from 'webpack-merge';
import * as path from 'path';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import common  from './webpack.common';


const production = webpackMerge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
    new MiniCssExtractPlugin({
       filename: '[name].[contenthash].css',   
    })
    ]
});


export default production;