const path = require('path');

module.exports = async ( env, argv ) =>
{
    console.log('Target: ', env); // dev or prod

    const FILENAME = 'src/typescript/base/SettingDebug.ts';

    const fs = require('fs').promises;
    const settingDebug = await fs.readFile(FILENAME, 'utf8')
        .then(
            async (fileContent) => {
                // console.log('> OK: ', fileContent);

                let newFileContent;
                if (env === 'prod') {
                    newFileContent = fileContent.replace(/DEBUG_MODE: boolean\s+= true/g,  'DEBUG_MODE: boolean                      = false');
                } else {
                    newFileContent = fileContent.replace(/DEBUG_MODE: boolean\s+= false/g, 'DEBUG_MODE: boolean                      = true');
                }
                // console.log('> CHANGED: ', newFileContent);

                await fs.writeFile(FILENAME, newFileContent, 'utf8');
            }
        )
    ;

    const config = {
        entry: './src/typescript/index.tsx',
        output: {
            filename: 'coding-ninjas-II-v1.0.0.js',
            path: __dirname + '/dist/js/',
        },
        resolve: {
            // add '.ts' and '.tsx' as resolvable extensions.
            extensions: [
                '.ts',
                '.tsx',
                '.js',
                '.json',
            ],
        },
    };

    // enable sourcemaps for debugging webpack's output.
    if ( argv.mode === 'development' )
    {
        config.devtool = 'source-map';
    }

    config.module = {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },

            // all output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    path.resolve( __dirname, 'node_modules/mutationobserver-shim' ),
                ],
            },

            // all '.css' files will be handled by the style- and css-loader
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },

            // all '.less' files will be handled by the style- and css-loader
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            relativeUrls:      false,
                            sourceMap:         true,
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
        ],
    };

    if ( argv.mode === 'production' )
    {
        config.optimization = {
            minimize: true,
        };
    }

    config.externals = {

        // 'wowjs': 'WOW',

        'moment':    'moment',
        'react-dom': 'ReactDOM',
        'react':     'React',
        'antd':      'antd',
        'fpsmeter':  'FPSMeter',
        'matter-js': 'Matter',
    }

    config.devServer = {
        host: 'localhost',
        port: 1234,
        watchContentBase: true,
        publicPath: '/js/',
        contentBase: __dirname + '/dist/',
    };

    return config;
};
