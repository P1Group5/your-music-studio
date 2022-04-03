// global variable list (e.g. query/element selectors)




// Create a for loop for creating a function that randomly selects songs
// for a playlist 
// OR we use a function that grabs the playlists made by spotify API

// spotify api mvp get songs based on artist/genre
var spotifyApi = function(){
    var clientId = '76afce2e64f741928726265f5bfed54e';
    var clientSecret = 'c34681d866cc4a47b7bd12fa8dc1d8fb';
    var token = () => {
        var result = fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            header: {
                'Content_Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(clientId + ': ' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        var data = result.json();
        return data.access_token;
    }
    var _getGenres = async (token) => {
        var result = fetch('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        }).then(function(response) {
            response.json().then(function(data) {
                console.log(data);
            });
        });
    }
};

// find lyrics for whatever song is playing
// set up local storage/api to save searches/most recent plays to display for user


// create a function that will add a song to a playlist
// OR we can try to connect the spotify API to do this





// Create a function that will store our search history in Local Storage
// And allow users, when visiting a page, to show the search history





// create a function that will link songs to different genres and 
// then using that array of genres, create a playlist based off it
// OR can try and create a for loop to show random 3-5 song suggestions
// based off of the array we create for different genres




// create a fetch API function for the musicxmatch (for lyrics) and 
// link the lyrics to each song (could consider creating it based off
// some if statements (e.g. if (songName === songNameLyrics)))




// create a fetch API to Etsy and allow it to maybe open an external
// page for it with a search of what the user is on (e.g. if a user is
// on a page for "ariana grande", then the external page for the marketplace
// will be searched for "ariana grande" when user loads onto it)




// create a random selection function that will allow the user
// to have some SUGGESTED products/merchandise on the page based off
// their own search input





// bonus: create a function that enables users to search songs
// based off lyrics. (e.g. maybe an if statement)