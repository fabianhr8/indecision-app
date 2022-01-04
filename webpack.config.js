const path = require('path');

module.exports = {
    // Where the actual app comes from
    entry: './src/app.js',
    // Where the app is going to be compiled
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                //  This will run babel for all .js files
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                //  This will run babel for all .scss files. The ? makes the first s optional
                test: /\.s?css$/,
                // This allows us to use an array of loaders
                use: [
                    'style-loader',
                    'css-loader',
                    // This uses node-sass to convert .scss to .css
                    'sass-loader'
                ]
            }
        ]
    },
    // This controls how maps are generated. If there's an error, this will tell you exactly where
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};