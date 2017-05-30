
function formatSongs(array) {
  return array.map(song => ({ song_name: encodeURI(song.song_name), artist: encodeURI(song.artist) }));
}

module.exports = {
  formatSongs
};
