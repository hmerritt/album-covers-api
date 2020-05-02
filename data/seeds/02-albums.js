const covers = require("../album-covers-index");

exports.seed = function (knex) {
    return knex("albums").insert(
        covers.albumsIndex(
            "C:\\Users\\Harry\\Documents\\my\\projects\\computing\\album-covers\\album-covers\\covers"
        )
    );
};
