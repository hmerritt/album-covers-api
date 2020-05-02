const fs = require("fs");
const covers = require("./album-covers-index");

//  Index data
const index = {
    artists: {
        path: "seeds/index/artists.js",
        data: covers.artistsIndex(`${__dirname}/../album-covers/covers`),
    },
    albums: {
        path: "seeds/index/albums.js",
        data: covers.albumsIndex(`${__dirname}/../album-covers/covers`),
    },
};

//  Create index directory in seeds
if (!fs.existsSync(`${__dirname}/seeds/index`)) {
    fs.mkdirSync(`${__dirname}/seeds/index`);
}

//  Generate and store index
covers.storeData(index.artists.data, index.artists.path);
covers.storeData(index.albums.data, index.albums.path);
