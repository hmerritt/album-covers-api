const express = require("express");
const axios = require("axios");
const db = require("./albums_db");

const router = express.Router();

//  Get all albums
router.get("/", db.validateId(), async (req, res, next) => {
    res.send(req.album);
});

//  Get individial album
router.get("/:id", db.validateId(), async (req, res, next) => {
    res.send(req.album);
});

//  Get individial album cover
router.get("/:id/cover", db.validateId(), async (req, res, next) => {
    //  Set image header (forces in-line image; no unexpected download)
    res.set("Content-Type", "image/jpeg");

    //  Github repo base URL
    const baseUrl =
        "https://github.com/hmerritt/album-covers/raw/master/covers/";

    //  Full URL to album cover
    const url =
        baseUrl +
        `${req.album.artist}/[${req.album.year}] ${req.album.name}/cover.jpg`;

    axios.get(
        "https://merritt.es/projects/album-covers-api/ping/index.php?image",
        {
            headers: {
                Actual: "actual",
            },
        }
    );

    //  Fetch album cover from Github
    //  (creates a stream)
    const response = await axios({
        url,
        method: "GET",
        responseType: "stream",
    });

    //  Pipe response stream in to express
    response.data.pipe(res);
});

module.exports = router;
