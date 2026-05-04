const net = require("net");

const server = net
  .createServer((client) => {
    client.write("Welcome to the server");
    //Server code here
  })
  .listen(3000, () => {
    console.log("listening port 3000");
  });

server.on("error", (err) => {
  console.log("an error occurred");
});
