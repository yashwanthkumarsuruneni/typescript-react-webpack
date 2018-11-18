import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import * as path from 'path';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
// import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import common  from './webpack.common';


const production : webpack.Configuration  = webpackMerge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
    //   runtimeChunk: 'single',
    //   minimizer: [
    //       new UglifyJsPlugin({
    //         cache: true,
    //         extractComments: false,
    //         parallel: true,
    //         uglifyOptions: {
    //             compress: {
    //               inline: true
    //             }
    //         },
    //         sourceMap: false
    //       })
    //   ],
      splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
      }
    },
    plugins: [
    new MiniCssExtractPlugin({
       filename: '[name].[contenthash].css',   
    }), 
    new OptimizeCssAssetsPlugin({
    })
    ]
});


export default production;