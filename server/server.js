const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
const port = 5001;

io.on("connection", (socket) => {
  console.log("Socket Connected Successfully.");
  socket.on("message", (payload) => {
    // console.log("Message Received", payload);
    io.emit("message", payload);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
