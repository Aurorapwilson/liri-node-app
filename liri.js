require("dotenv").config();

//project variables
var keys = require("./keys.js");



//variables to store CL input


const liriArgument = process.argv[2]
const searchTerm = process.argv[3];//movie title, concert, songs title. 

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
    //functions 
    // function spotifySong(){
    //     if (liriArgument === "spotify-this-song"){
           
    //     };
    //axios api call to ombd and bandsintown
//look up axios require
var axios = require ('axios');
//axios api call


axios.get("http://www.omdbapi.com/?t="+searchTerm+"&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    
    console.log(response);
    console.log("The movie's rating is: " + response.data.imdbRating);
  });


    
 





    


