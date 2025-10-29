const jsonServer = require("json-server"); // importing json-server library
const cors = require("cors"); // 

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9002; //  chose port from here like 8080, 3001

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
