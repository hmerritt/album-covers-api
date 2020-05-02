const db = require("../../../data/dbConfig");

//  Get an album
function get(id = null) {
    if (id) {
        //  Get individial album
        return db("albums")
            .where("albums.id", id)
            .join("artists", "albums.artist_id", "artists.id")
            .select(
                "albums.id",
                "artists.name as artist",
                "albums.name",
                "albums.year"
            )
            .first();
    } else {
        //  Get all albums
        return db("artists")
            .join("albums", "albums.artist_id", "artists.id")
            .select(
                "albums.id",
                "artists.name as artist",
                "albums.name",
                "albums.year"
            );
    }
}

//  Validators

//  Check if album id exists
function validateId() {
    return (req, res, next) => {
        get(req.params.id || null)
            .then((album) => {
                //  Check if album exists
                if (album) {
                    //  All good -> continue
                    //  Add album to request object
                    req.album = album;
                    next();
                } else {
                    res.status(400).json({
                        message: "invalid album id",
                    });
                }
            })
            .catch((error) => {
                next(error);
            });
    };
}

module.exports = { get, validateId };
