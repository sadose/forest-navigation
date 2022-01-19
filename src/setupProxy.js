const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://www.baidu.com/',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': '',
            },
        })
    );
};