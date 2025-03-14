const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const pages = ["index", "signup", "login", "network", "quiz"];

module.exports = {
    devtool: "eval-cheap-module-source-map",
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.js`;
        return config;
    }, {}),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        // access from mobile on same network
        //host: '192.168.1.1', <-- your ip here
        port: 8080,
        contentBase: path.join(__dirname, "dist"),
    },
    node: {
        fs: "empty",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["env"],
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        // creates style nodes from JS strings
                        loader: "style-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        // compiles Sass to CSS
                        loader: "sass-loader",
                        options: {
                            outputStyle: "expanded",
                            sourceMap: true,
                            sourceMapContents: true,
                        },
                    },
                    // Please note we are not running postcss here
                ],
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/",
                            publicPath: "assets/",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [].concat(
        pages.map(
            (page) =>
                new HtmlWebpackPlugin({
                    inject: true,
                    template: `./${page}.html`,
                    filename: `${page}.html`,
                    chunks: [page],
                })
        )
    ),
};
