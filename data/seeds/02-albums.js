exports.seed = function (knex) {
    return knex("albums").insert([
        {
            id: 1,
            artist_id: 1,
            name: "Lure of the Tropica",
            year: "1955",
        },
        {
            id: 2,
            artist_id: 2,
            name: "Street Talk",
            year: "1976",
        },
        {
            id: 3,
            artist_id: 3,
            name: "Uptown",
            year: "1971",
        },
        {
            id: 4,
            artist_id: 4,
            name: "Dream Time",
            year: "1958",
        },
    ]);
};
