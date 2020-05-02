const express = require("express");
const db = require("./artists_db");

const router = express.Router();

//  Get all artists
router.get("/", db.validateId(), async (req, res, next) => {
    res.send(req.artist);
});

//  Get individial artist
router.get("/:id", db.validateId(), async (req, res, next) => {
    res.send(req.artist);
});

module.exports = router;
