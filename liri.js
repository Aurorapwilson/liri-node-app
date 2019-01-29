require("dotenv").config();

//node cases ex. node liri.js concert-this <artist/band name here>
// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`
//import key.js file
var keys = require("./keys.js");

//spotify request

const liriArgument = process.argv[2];
//----------------------------------------------------------------------------------------//
    //possible commands for this liri app

    switch (liriArgument){
        case "concert-this": concertThis();
        break;

        case "spotify-this-song": spotifySong();
        break;

        case "movie-this": guessMovie();
        break;

        case "do-what-it-says": simonSays();
        break;
        //CLI instructions to user
        default: console.log("\r\n"+"After 'node liri.js', try typing one of the following commands:"  + "\r\n"+
        "1. concert-this 'any artist/band name' "+ "\r\n"+
        "2. spotify-this-song 'any song name' "+ "\r\n"+
        "3. movie-this 'any movie name' "+ "\r\n"+
        "4. do-what-it-says"+ "\r\n"+
        " Make sure to put the movie or song name in quotations if it's not all one word");
     }

    //  -------------------------------------------------------------------------------------//
    //create functions 


