import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { commandsPathList } from './src/dir_shared/constants';

let nameAndPaths = new Map([
    ['background', './src/background.ts'],
    ['popup/popup', './src/popup/popup.ts'],
    ['contentScript', './src/contentScript.ts'],
])
//commands files
for (const [key, value] of Object.entries(commandsPathList)) {
    const name = `commands/${key}Command`
    const path = `./src/${value.substring(0, value.length - 2)}ts`
    nameAndPaths.set(name, path)
}
let entry = Object.fromEntries(nameAndPaths)

const config: webpack.Configuration = {
    entry: entry,
    mode: "none", // "production" | "development" | "none"
    output: {
        filename: "[name].js", // string (default)
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                // use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'popup/popup.html',
            template: 'src/popup/popup.html',
            chunks: ['popup']
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, "src/manifest.json") },
                // { from: path.resolve(__dirname, "src/popup/style.css") }
                // { from: 'src/manifest.json', to: 'manifest.json' },
                // { from: 'src/*.png', to: '[name].[ext]' }
            ]
        }),
        new MiniCssExtractPlugin({ filename: "[name].css", }),
        new CssMinimizerPlugin(),
        new CleanWebpackPlugin()

    ],
    optimization: {
        minimize: true,
    }
};

export default config;