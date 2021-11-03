const express = require("express");
const fs = require("fs")
const ent = require("ent")
const http = require("http")

var app = express()
var sv = http.createServer(app);

var io = require("socket.io").listen(sv);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})
// .get('/d', (req, res) => {
//     res.setHeader("Content-Type", "file");
//     res.sendFile(__dirname + '/index.html');
// })

io.sockets.on("connection", (socket) => {

    // new user event
    socket.on("new_user", (pseudo) => {
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
})

app.use("/public", express.static(__dirname + "/public"));

sv.listen(port=8080, () => {
    console.log("Server listen on http://localhost:" + port);
})
