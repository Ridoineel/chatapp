const http = require("http");
const app = require("./app");
const ent = require("ent");
const Socket = require("socket.io");

server = http.createServer(app);
io = Socket(server, { serveClient: false, cors:{origin:"*"} })

io.sockets.on("connection", (socket) => {
    // new user event
    socket.on("newUser", (pseudo) => {
        socket.pseudo = ent.encode(pseudo);
<<<<<<< HEAD
        socket.broadcast.emit("newUser", pseudo);
=======
        socket.broadcast.emit("newUser", pseudo)
>>>>>>> 0b9b0cca650b59ec62392907a84f9d0e2deff219
    });

    // new message event
    socket.on("message", (message) => {
        socket.broadcast.emit("message", {pseudo: ent.decode(socket.pseudo), message: message});
    });

    // user disconnect event
    socket.on("disconnect", () => {
        socket.broadcast.emit("user_disconnect", socket.pseudo)
    })

})


server.listen(port=8080, () => {
    console.log("Server listen on http://localhost:" + port);
})
