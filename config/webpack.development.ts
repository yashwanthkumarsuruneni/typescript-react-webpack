import * as path from 'path';
import * as webpackMerge from 'webpack-merge';
import common  from './webpack.common';

const development = webpackMerge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    }
});


export default development;