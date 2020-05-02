const db = require("../../../data/dbConfig");

//  Get an artist
function get(id = null) {
    if (id) {
        //  Get individial artist
        return db("artists").where("id", id).first();
    } else {
        //  Get all artists
        return db("artists");
    }
}

//  Validators

//  Check if artist id exists
function validateId() {
    return (req, res, next) => {
        get(req.params.id || null)
            .then((artist) => {
                //  Check if artist exists
                if (artist) {
                    //  All good -> continue
                    //  Add artist to request object
                    req.artist = artist;
                    next();
                } else {
                    res.status(400).json({
                        message: "invalid artist id",
                    });
                }
            })
            .catch((error) => {
                next(error);
            });
    };
}

module.exports = { get, validateId };
