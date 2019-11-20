// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the array that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  let totalMins = 0;
  let totalSongs = 0;
  let sortedArray = arr.sort();
    for (let i = 0; i < sortedArray.length; i++){
      if (totalMins + arr[i] <= 60){
        totalMins = totalMins + arr[i];
        totalSongs++
      } 
    }

    return totalSongs;
  };


