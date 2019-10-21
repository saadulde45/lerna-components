const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const glob = require("glob")

module.exports = {
    entry: {
        "bundle.js": glob.sync("build/static/?(js|css)/*.?(js|css)").map(f => path.resolve(__dirname, f)),
    },
    output: {
        filename: "bundle.min.js",
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }, {
            test: /\.(css|scss)$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg|jpe?g|gif)$/i,
            exclude: /node_modules/,
            loaders: ['url-loader?limit=100000']
        }
        ],
    },
    // plugins: [new UglifyJsPlugin()],
}