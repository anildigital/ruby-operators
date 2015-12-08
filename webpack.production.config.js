var webpack = require("webpack");

module.exports = {
    entry: {
        javascript: "./app/app.jsx"
    },

    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    resolve: {
        extensions: ["", ".json",  ".js", ".jsx"]
    },

    module: {
        noParse: [/autoit.js/],
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.jsx$/,
                loaders: ["babel-loader"]
            },
            {
                test:  /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        })
    ],
}
