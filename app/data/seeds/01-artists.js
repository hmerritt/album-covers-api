const covers = require(`${__dirname}/../album-covers-index`);
const index = covers.loadData(`${__dirname}/index/artists.js`);

exports.seed = function (knex) {
    return knex("artists").insert(index);
};
