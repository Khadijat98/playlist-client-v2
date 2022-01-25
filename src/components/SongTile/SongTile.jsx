import React from 'react';

const SongTile = (props) => {
  return (
    <>
      {props.songs.map(song => {
        return (
          <>
            <img src={song.songMediaUrl} alt="" />
            <p>{song.songTitle}</p>
          </>
        ) 
      })}
    </>
  )
}

export default SongTile;
