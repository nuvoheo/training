import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = (props) => {
  const songs = props.songs || [];
  return <div className="ui divided list">
    {
      songs.map(song => (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" id={1} onClick={() => props.onClick(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      ))
    }
  </div>
}
const mapStateToProps = (state, ownProps) => {
  // ownProps: la props duoc truyen vao khi goi <SongList props=....></SongList>
  console.log(state)
  return {
    songs: state.songs
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (song) => dispatch(selectSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
