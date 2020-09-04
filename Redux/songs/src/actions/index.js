// Action creator
export const actionTypes = {
  songSelected: 'SONG_SELECTED'
}

export const selectSong = song => {
  // Return an action
  return {
    type: actionTypes.songSelected,
    payload: song
  };
};