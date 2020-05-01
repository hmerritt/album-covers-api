exports.up = function (knex) {
    return knex.schema
        .createTable("artists", (table) => {
            table.increments();
            table.text("name").unique().notNullable();
        })
        .createTable("albums", (table) => {
            table.increments();
            table
                .integer("artist_id")
                .unsigned()
                .notNullable()
                .references("artists.id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.text("name").notNullable();
            table.text("year").notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("artists").dropTableIfExists("albums");
};
