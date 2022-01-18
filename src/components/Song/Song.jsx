import React from 'react'
// need props in here from the database
// this is the format for all songs

const Song = (props) => {
  const {
    songTitle,
    songMediaUrl
  } = props.song;

  return (
    <div className="song">
      <h3>{songTitle}</h3>
      <img src={songMediaUrl} alt="song cover image" />
    </div>
  )
}

export default Song;
