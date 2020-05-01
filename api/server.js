const express = require("express");
const cors = require("cors");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use(cors());

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
