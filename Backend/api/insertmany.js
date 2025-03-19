// import { artistArray } from "../../Frontend/src/assets/database/artists.js";
// import { songsArray } from "../../Frontend/src/assets/database/songs.js";
// import { db } from "./connect.js";

// const newArtitsArray = artistArray.map((currentArtistObj) => {
//     const newArtistObj = {...currentArtistObj };
//     delete newArtistObj.id;

//     return newArtistObj;

// });

// const newSongsArray = songsArray.map((currentSongObj) => {
//     const newSongObj = {...currentSongObj };
//     delete newSongObj.id;

//     return newSongObj;

// });

// const responseSongs = await db.collection("songs").insertMany(newSongsArray);
// const reponseArtists = await db.collection("artists").insertMany(newArtitsArray);

// console.log(responseSongs)
// console.log(reponseArtists)