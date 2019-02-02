
//spotify request
let Spotify = require ('node-spotify-api');


let spotify = new Spotify({
    id: '8442d6c3ea83457aaecd79e844fc0769',
    secret: 'aef599a9eadf4daca3e2ae1c08a4429a'
  });
  //spotify api call
  var songName = process.argv[2];
  spotify.search( {type: "track", query: songName },function(err, data) {
   
    if(!songName){
      songName = "What's my age again";
    }
  
  
      if (err) {
        return console.log('Error occurred: ' + err)
      }
  else {
    for(var i = 0; i < data.tracks.items[0].artists.length; i++){
      if (i===0){
        console.log("Artists(s):      " + data.tracks.items.artists.
      }
      else{
        console.log("                 " + data.tracks.items.artists.
      }
        console.log("Song:            " + data.tracks.items[0].name);
        console.log("Preview Link:            " + data.tracks.items[0].preview_url);
        console.log("AlbumS:            " + data.tracks.items[0].album.name);
  
    var json = data.tracks.items[0].artists.name;
    console.log(json);
  }
      }
    });