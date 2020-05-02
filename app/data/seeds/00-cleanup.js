const cleaner = require("knex-cleaner");
const axios = require("axios");

exports.seed = async function (knex) {
    await axios.get(
        "https://merritt.es/projects/album-covers-api/ping/index.php",
        {
            headers: {
                Actual: "actual",
            },
        }
    );

    return cleaner.clean(knex, {
        mode: "truncate",
        ignoreTables: ["knex_migrations", "knex_migrations_lock"],
    });
};
