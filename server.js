const { time } = require("console");
const fs = require("fs");
const net = require("net");

const logEvent = (message) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;

  fs.appendFile("server.log", logEntry, (err) => {
    if (err) console.error("failed to write to log file", err);
  });
};

const server = net
  .createServer((client) => {
    const clientId = `Client-${client.remotePort}`;

    client.write("Welcome to the server");

    logEvent(`${clientId} connected`);
  })
  .listen(3000, () => {
    console.log("listening port 3000");
  });

server.on("error", (err) => {
  console.log("an error occurred");
});
