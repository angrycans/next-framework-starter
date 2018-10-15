const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withSourceMaps = require('@zeit/next-source-maps')
const { exportPathMap } = require('nextjs-export-path-map')

const { ANALYZE } = process.env;
const nextConfig = {
    distDir: '../build',
    assetPrefix: '',
    webpack(config, { dev }) {
        switch (ANALYZE) {
            case 'BUNDLES':
                config.plugins.push(
                    new BundleAnalyzerPlugin({
                        analyzerMode: 'server',
                        analyzerPort: dev ? 8888 : 8889,
                        openAnalyzer: true,
                    }),
                );
                break;
        }


        // config.module.rules.push({
        //     test: /\.(png|jpg|svg|eot|otf|ttf|woff|woff2)$/,
        //     use: {
        //         loader: 'url-loader',
        //         options: {
        //             limit: 100000,
        //             publicPath: './',
        //             outputPath: 'static/',
        //             name: '[name].[ext]'
        //         }
        //     }
        // })


        return config
    },
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    }
    // exportPathMap: exportPathMap.bind(null, path.join(__dirname, 'pages')),
}

module.exports = withTypescript(withCss(withLess(withSourceMaps(
    nextConfig
))))
