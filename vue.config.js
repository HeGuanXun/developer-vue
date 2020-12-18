/**
 * 配置参考: https://cli.vuejs.org/zh/config/
 */

const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    chainWebpack: config => {
        config.plugins.delete('prefetch');
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader'),
            config.plugins.delete('prefetch');
    },
    configureWebpack: {
        plugins: [
            new CompressionPlugin({
                test: /\.(js|css)(\?.*)?$/i, // 需要压缩的文件正则
                threshold: 10240, // 文件大小大于这个值时启用压缩
                deleteOriginalAssets: false// 压缩后保留原文件
            })
        ]
    },
    productionSourceMap: false,
    lintOnSave: false,
    // devServer: {
    //   open: true,
    //   port: 8002,
    //   overlay: {
    //     errors: false,
    //     warnings: false
    //   }
    // }
    devServer: {
        port: "8002",
        open: false,
        proxy: {
            "/apiproxy": {
                target: "http://124.225.17.80:8023/odae",
                changeOrigin: true,
                pathRewrite: {
                    "^/apiproxy": ""
                },
                secure: false
            },
            /*----下载专用----*/
            "/api1proxy": {
                target: "http://124.225.17.80:8023",
                changeOrigin: true,
                pathRewrite: {
                    "^/api1proxy": ""
                },
                secure: false
            }
        }
    },
}
