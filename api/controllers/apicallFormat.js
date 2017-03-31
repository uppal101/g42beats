

function formatSongs(array) {
  return array.map(function(song) {
    console.log(song);
    console.log(song.artist);
      return ({song_name: encodeURI(song.song_name), artist: encodeURI(song.artist)});
    });

}
module.exports = {
  formatSongs: formatSongs
}
