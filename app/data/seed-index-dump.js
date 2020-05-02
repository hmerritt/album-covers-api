const fs = require("fs");
const covers = require("./album-covers-index");

//  JSON dump to file
const storeData = (data, path) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data));
    } catch (err) {
        console.error(err);
    }
};

//  Index data
const index = {
    artists: {
        path: "seeds/index/artists.js",
        data: covers.artistsIndex(`${__dirname}/../../../album-covers/covers`),
    },
    albums: {
        path: "seeds/index/albums.js",
        data: covers.albumsIndex(`${__dirname}/../../../album-covers/covers`),
    },
};

//  Create index directory in seeds
fs.mkdirSync(`${__dirname}/seeds/index`);

//  Generate and store index
storeData(index.artists.data, index.artists.path);
storeData(index.albums.data, index.albums.path);
