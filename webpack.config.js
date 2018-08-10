const path = require('path');
// const JavaScriptObfuscator = require('webpack-obfuscator');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'production',
    watch: false,
    devtool: 'source-map',
    entry: {
        'boole': './.temp/index.js',
        'boole.min': './.temp/index.js'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'boole',
        umdNamedDefine: true
    },
    // plugins: [
    //     new JavaScriptObfuscator ({
    //         rotateUnicodeArray: true
    //     })
    // ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                include: /\.min\.js$/
            })
        ]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    }
};