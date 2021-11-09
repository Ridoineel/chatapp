const http = require("http");
const App = require("./App");
const ent = require("ent");
const Socket = require("socket.io");

server = http.createServer(App);
io = Socket(server, { serveClient: false, cors:{origin:"*"} })

io.sockets.on("connection", (socket) => {
    // new user event
    socket.on("newUser", (pseudo) => {
        socket.pseudo = ent.encode(pseudo);
        socket.broadcast.emit("newUser", pseudo);
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
