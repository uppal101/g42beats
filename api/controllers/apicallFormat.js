

function formatSongs(array) {
  return array.map(function(song) {
      return ({song_name: encodeURI(song.song_name), artist: encodeURI(song.artist)});
    });

}

// function formatSongs(array) {
//   return array.map(function(song) {
//       return ({song_name: song.song_name.split(' ').join('%20'), artist: song.artist.split(' ').join('%20')});
//     });
//
// }

module.exports = {
  formatSongs: formatSongs
}
