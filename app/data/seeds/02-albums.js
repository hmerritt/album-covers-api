const covers = require("../album-covers-index");

exports.seed = function (knex) {
    return knex("albums").insert(
        covers.albumsIndex(`${__dirname}/album-covers/covers`)
    );
};
