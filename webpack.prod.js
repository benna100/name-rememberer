const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin"); //installed via npm
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const SocialTags = require("social-tags-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const buildPath = path.resolve(__dirname, "dist");

const appUrl = "https://hvorlangtervi.dk";
const appTitle = "Easier remember names";
const appDescription = "Få et godt overblik over dit netværk";

const CnameWebpackPlugin = require("cname-webpack-plugin");

const pages = ["index", "signup", "login", "network"];

module.exports = {
    devtool: "source-map",
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.js`;
        return config;
    }, {}),
    output: {
        filename: "[name].[hash:20].js",
        path: buildPath,
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
                test: /\.(scss|css|sass)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            // translates CSS into CommonJS
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            // Runs compiled CSS through postcss for vendor prefixing
                            loader: "postcss-loader",
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
                    ],
                    fallback: "style-loader",
                }),
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
    plugins: [
        ...[].concat(
            pages.map(
                (page) =>
                    new HtmlWebpackPlugin({
                        inject: true,
                        template: `./${page}.html`,
                        filename: `${page}.html`,
                        chunks: [page],
                        favicon: "./src/assets/favicon.png",
                    })
            )
        ),
        new CleanWebpackPlugin(buildPath),
        new ExtractTextPlugin("styles.[md5:contenthash:hex:20].css", {
            allChunks: true,
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessor: require("cssnano"),
            cssProcessorOptions: {
                map: {
                    inline: false,
                },
                zindex: false,
                discardComments: {
                    removeAll: true,
                },
            },
            canPrint: true,
        }),
        new SocialTags({
            appUrl: appUrl,
            facebook: {
                "fb:app_id": "123456789",
                "og:url": appUrl,
                "og:type": "website",
                "og:title": appTitle,
                "og:image": "./src/assets/social-facebook-image.png",
                "og:description": appDescription,
                "og:site_name": appTitle,
                "og:locale": "da",
                "og:article:author": "Your name",
            },
            twitter: {
                "twitter:card": "summary_large_image",
                "twitter:site": "@site_account",
                "twitter:creator": "@twitterhandle",
                "twitter:url": appUrl,
                "twitter:title": appTitle,
                "twitter:description": appDescription,
                "twitter:image": "./src/assets/social-twitter.png",
            },
        }),
    ],
};
