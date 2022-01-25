import React from 'react';

const SongTile = (props) => {
  return (
    <>
      {props.songs.map((song) => {
        return (
          <>
            <img src={song.songMediaUrl} alt="song cover icon" />
            <p>{song.songTitle}</p>
          </>
        ) 
      })}
    </>
  )
}

export default SongTile;
