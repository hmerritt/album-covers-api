const covers = require("../album-covers-index");

exports.seed = function (knex) {
    return knex("artists").insert(
        covers.artistsIndex(
            "C:\\Users\\Harry\\Documents\\my\\projects\\computing\\album-covers\\album-covers\\covers"
        )
    );
};
