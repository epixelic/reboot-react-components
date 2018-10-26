const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'lib/index.js'),
    output: {
        filename: 'reboot-react-components.js',
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'RebootReactComponents'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
};