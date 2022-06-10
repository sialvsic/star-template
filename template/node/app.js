const http = require("http");

const server = http.createServer();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  process.title = "node 进程";
  console.log("进程id", process.pid);
});
