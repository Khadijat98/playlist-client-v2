// where i would write out the way the song looks in the place i.e. with title and image
// need to connect the song ids to here
import React from 'react';

const SongTile = (props) => {
  const {songTitle, songMediaUrl} = props;
  return (
    <div>
      <p>{songTitle}</p>
      <img src={songMediaUrl} alt="" />
    </div>
  )
}

export default SongTile;
