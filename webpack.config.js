/**
 * Created by charlotte on 17/2/2.
 */
module.exports = {
    entry: './src/main.js',
    output: {
        path: './direct',
        publicPath: 'direct/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {test: /\.js$/,loader: 'babel',exclude: /node_modules/},
            {test: /\.vue$/,loader: 'vue'}
        ]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    }
}