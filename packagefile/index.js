const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Load multiple JSON files
const mathRouter = jsonServer.router("sscmathapi.json");
const gkRouter = jsonServer.router("sscgkapi.json");
// const englishRouter = jsonServer.router("englishapi.json");

// Mount each under a different route prefix
server.use("/math", mathRouter);
server.use("/gk", gkRouter);
// server.use("/english", englishRouter);

const port = process.env.PORT || 8003;
server.listen(port, () => {
  
});