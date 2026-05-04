const net = require("net");

const client = net.createConnection({ port: 3000 }, () => {
  console.log("Connected");
});

client.setEncoding("utf8");
client.on("data", (data) => {
  console.log(data);
});
