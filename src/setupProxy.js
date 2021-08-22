const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/burgers',
        createProxyMiddleware({
            target: 'http://localhost:3050',
            changeOrigin: true,
        })
    );
};