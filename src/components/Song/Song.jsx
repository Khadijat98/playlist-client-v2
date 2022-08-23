import React from 'react'

const Song = (props) => {
  const {song_name} = props;

  return (
    <option className="song" value={song_name}>
      {song_name}
    </option>
  )
}

export default Song;