const covers = require("../album-covers-index");

exports.seed = function (knex) {
    return knex("artists").insert(
        covers.artistsIndex(`${__dirname}/album-covers/covers`)
    );
};
