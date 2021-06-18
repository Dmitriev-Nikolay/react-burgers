import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
    app.use(createProxyMiddleware("/burgers", { target: "http://localhost:3080" }));
};