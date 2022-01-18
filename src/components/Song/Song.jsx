import React from 'react'
// need props in here from the database
// this is the format for all songs

const Song = (props) => {
  const {
    songTitle,
    releaseDate,
    songMediaUrl
  } = props.song;
  
  return (
    <div className="song">
      
    </div>
  )
}

export default Song;
