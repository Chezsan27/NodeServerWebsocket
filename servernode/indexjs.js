"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const socket_io_1 = require("socket.io");
const http = require("http");
const user_1 = require("./userjs");
const news = { news: [{ name: "element1" }, { name: "element2" }] };
const users = [];
const PORT = 5000;
const app = express();
const httpServer = new http.Server(app);
const io = new socket_io_1.Server(httpServer, {cors: {origin: '*'}});

io.on('connection', function (client) {
    const news3 = { news: [{ name: "element1" }, { name: "element2" }] };
    //console.log(client)
    //user_1.User.addUser(client, io);
    io.emit('users-online', user_1.User.getUserList());
    io.emit('news', news3);
    //console.log(client);

    console.log(news3);
    //disconnectClient(client, io);

    //removeUserOnline(client, io);
});
httpServer.listen(PORT, function () {
    console.log("Server listen on port ".concat(PORT));
});
