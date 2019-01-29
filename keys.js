
//spotify request
var Spotify = require ('node-spotify-api');
var spotify = new Spotify({
    id: '8442d6c3ea83457aaecd79e844fc0769',
    secret: 'aef599a9eadf4daca3e2ae1c08a4429a'
  });


//spotify api call
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });

//axios api call to ombd and bandsintown
//look up axios require
var axios = require ('axios');
//axios api call
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("The movie's rating is: " + response.data.imdbRating);
  });
