const path = require('path');


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: './src/js/index.js',

    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'static'),
        },
        client: {
            progress: true,
        },
        port: 9000,
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: ['url-loader']

            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader']
            }
        ],
    
    },
 
};


