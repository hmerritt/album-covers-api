const covers = require(`${__dirname}/../album-covers-index`);
const index = covers.loadData(`${__dirname}/index/albums.js`);

exports.seed = function (knex) {
    return knex("albums").insert(index);
};
