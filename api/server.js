const express = require("express");
const cors = require("cors");

//  API Routers
const artists_router = require("./resources/artists/artists_router");
const albums_router = require("./resources/albums/albums_router");

const server = express();

server.use(express.json());
server.use(cors());
server.use("/artists", artists_router);
server.use("/albums", albums_router);

//  Base endpoint
server.get("/", (req, res) => {
    res.json([
        { endpoint: "/", description: "All endpoints" },
        { endpoint: "/albums", description: "All albums" },
        { endpoint: "/albums/:id", description: "Individual album" },
        { endpoint: "/artists", description: "All artists" },
        { endpoint: "/artists/:id", description: "Individual artist" },
    ]);
});

//  Server error middleware
server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Somthing went wrong",
    });
});

module.exports = server;
