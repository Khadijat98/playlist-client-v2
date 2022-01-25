import React from 'react'

const Song = (props) => {
  const {songTitle} = props;

  return (
    <option className="song" value={songTitle}>
      {songTitle}
    </option>
  )
}

export default Song;