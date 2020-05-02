"use strict";

const { readdirSync } = require("fs");

function generateCoversIndex(path_to_covers = "../../album-covers/covers") {
    //  Setup store for index
    let index = [];

    //  Get all folder names within a directory
    const getDirectories = (source) =>
        readdirSync(source, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);

    //  Get all artists
    const artists = getDirectories(path_to_covers);

    //  Loop each artist
    for (let key in artists) {
        //  Path to artist
        const artist_path = `${path_to_covers}/${artists[key]}`;

        //  Albums array
        const artist_albums = getDirectories(artist_path);

        //  Loop albums
        for (let akey in artist_albums) {
            const album_folder = artist_albums[akey];

            //  Extract key info from folder name
            const album_name = album_folder.match("(?<=] ).*")[0];
            const album_year = album_folder.match("(?<=\\[).+?(?=\\])")[0];

            //  Replace album with useful data
            artist_albums[akey] = {
                name: album_name,
                year: album_year,
            };
        }

        //  Add artist + albums to index
        index.push({
            artist: artists[key],
            albums: artist_albums,
        });
    }

    return index;
}

//  Get artist index
function artistsIndex(path_to_covers = "../../album-covers/covers") {
    const index = generateCoversIndex(path_to_covers);
    return index.map((value, index) => {
        return {
            id: index + 1,
            name: value.artist,
        };
    });
}

//  Get album index
function albumsIndex(path_to_covers = "../../album-covers/covers") {
    const index = generateCoversIndex(path_to_covers);
    const albumsIndex = [];
    let albumsCounter = 1;

    //  Loop artists
    index.forEach((artist, artist_id) => {
        //  Loop artist albums
        artist.albums.forEach((album, i) => {
            albumsIndex.push({
                id: albumsCounter,
                artist_id: artist_id + 1,
                name: album.name,
                year: album.year,
            });
            albumsCounter++;
        });
    });

    return albumsIndex;
}

module.exports = { generateCoversIndex, artistsIndex, albumsIndex };
