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
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.jsx$/,
                loaders: ["react-hot", "babel-loader"]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },

    devtool: "#inline-source-map"
}
