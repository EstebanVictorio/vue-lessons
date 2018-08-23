let path = require('path');
let webpack = require('webpack');
let HWP = require('html-webpack-plugin');
let VLP = require('vue-loader/lib/plugin');
const COMPONENT = path.resolve(__dirname, 'Component');
const ACTION = path.resolve(__dirname, 'Action');
const SETTINGS = path.resolve(__dirname, 'Settings');
let config =
    {
        mode: 'development',
        plugins:
            [
                new HWP(
                    {
                        title: 'Vue Lessons',
                        template: 'index.ejs',
                        inject: 'body',
                        filename: '../index.html'
                    }
                ),
                new VLP()
            ],
        node: {
            __dirname: true,
            __filename: true
        },
        entry: {
            main: COMPONENT + '/Bootstrapper/Main.js'
        },
        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                //<editor-fold desc="Component Aliases"
                Container: COMPONENT + '/Container',
                Presentational: COMPONENT + '/Presentational',
                Storage: COMPONENT + '/Storage',
                //</editor-fold>
                //<editor-fold desc="Action Aliases"
                Submit: ACTION + '/Submit',
                Delete: ACTION + '/Delete',
                //</editor-fold>
                //<editor-fold desc="Settings Aliases">
                Settings: SETTINGS
                //</editor-fold>
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options:
                            {
                                presets:
                                    [
                                        'babel-preset-env',
                                        'babel-preset-vue'
                                    ],
                                plugins:
                                    [
                                        require('babel-plugin-transform-object-rest-spread'),
                                        require('babel-plugin-transform-class-properties'),
                                        require('babel-plugin-syntax-dynamic-import'),
                                        require('babel-plugin-transform-runtime'),
                                        require('babel-plugin-transform-vue-jsx'),
                                    ]
                            }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.vue$/,
                    use: ['vue-loader']
                }

            ]
        }

    };

module.exports = config;
