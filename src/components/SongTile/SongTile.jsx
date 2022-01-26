import React from 'react';
import "./SongTile.scss";

const SongTile = (props) => {
  return (
    <>
      {props.songs.map((song) => {
        return (
          <div className="song-tile">
            <img className="song-tile__img" src={song.songMediaUrl} alt="song cover icon" />
            <p className="song-tile__title">{song.songTitle}</p>
          </div>
        ) 
      })}
    </>
  )
}

export default SongTile;
