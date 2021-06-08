const  { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(createProxyMiddleware("/burgers", { target: "http://localhost:3080" }));
};