// where i would write out the way the song looks in the place i.e. with title and image
// need to connect the song ids to here
import React from 'react';

const SongTile = (props) => {
  const {songTitle, songMediaUrl} = props;
  return (
    <div>
      <img src={songMediaUrl} alt="" />
      <p>{songTitle}</p>
    </div>
  )
}

export default SongTile;
