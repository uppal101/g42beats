

function formatSongs(array) {
  return array.map(song => ({ song_name: encodeURI(song.song_name), artist: encodeURI(song.artist) }));
}

// remove code that you're not using.

module.exports = {
  formatSongs
};
