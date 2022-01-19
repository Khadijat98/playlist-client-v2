import React from 'react'
// need props in here from the database
// this is the format for all songs

const Song = (props) => {
  const {songTitle} = props;

  return (
    <option className="song" value={songTitle}>
      {songTitle}
    </option>
  )
}

export default Song;
