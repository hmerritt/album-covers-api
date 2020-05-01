exports.seed = function (knex) {
    return knex("artists").insert([
        { id: 1, name: "André Kostelanetz" },
        { id: 2, name: "Bob Crewe" },
        { id: 3, name: "Gloria Barnes" },
        { id: 4, name: "Wayne King" },
    ]);
};
