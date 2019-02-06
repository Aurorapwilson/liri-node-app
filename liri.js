require("dotenv").config();

//project variables
var keys = require("./keys.js");


let Spotify = require ('node-spotify-api');


let spotify = new Spotify(keys.spotify);

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
    function spotifySong(){

           
    //spotify api call
    
    spotify.search( {type: "track", query: searchTerm },function(err, data) {
     
      if(!searchTerm){
        searchTerm = "What's my age again";
      }
    
    
        if (err) {
          return console.log('Error occurred: ' + err)
        }
    else {
    //   for(var i = 0; i < data.tracks.items[0].artists.length; i++){
    //     if (i===0){
    //       console.log("Artists(s):      " + data.tracks.items.artists[0].name);

    //     }
    //     else{
    //       console.log("                 " + data.tracks.items.artists[0].name);
    //     }
    //       console.log("Song:            " + data.tracks.items[0].name);
    //       console.log("Preview Link:            " + data.tracks.items[0].preview_url);
    //       console.log("AlbumS:            " + data.tracks.items[0].album.name);
    
   
    // }

console.log(JSON.stringify(data.tracks.items[0].album.artists.name));

    
      };
    });
  }
        
    //axios api call to ombd and bandsintown
//look up axios require
var axios = require ('axios');
//axios api call


// axios.get("http://www.omdbapi.com/?t="+searchTerm+"&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     // Then we print out the imdbRating
    
//     // console.log(response);
//     // console.log("The movie's rating is: " + response.data.imdbRating);
//   });


    
 





    



