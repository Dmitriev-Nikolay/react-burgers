const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/data.json');
const middlewares = jsonServer.defaults({
    static: './build',
});

const PORT = process.env.PORT || 3050;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log('Server is running');
});