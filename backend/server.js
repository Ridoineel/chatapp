const http = require("http");
const app = require("./app");
const Socket = require("socket.io")

server = http.createServer(app);

io = Socket.listen(server)

let ct = 1;

io.sockets.on("connection", (socket) => {
    // new user event
    socket.on("new_user", (pseudo) => {
        ct++;

        socket.pseudo = ent.encode(pseudo);
        socket.broadcast.emit("new_user", pseudo)
    });

    // new message event
    socket.on("message", (message) => {
        message = ent.encode(message);
        socket.broadcast.emit("message", {pseudo: ent.decode(socket.pseudo), message: message});
    });

    // user disconnect event
    socket.on("disconnect", () => {
        socket.broadcast.emit("user_disconnect", socket.pseudo)
    })

    console.log(ct);
})


server.listen(port=8080, () => {
    console.log("Server listen on http://localhost:" + port);
})
