import React from 'react';
// this should contain the props for a single playlist

const Playlist = () => {
  const {
    playlistTitle,
    playlistImgUrl,
    createdBy,
    playlistDescription,
  } = props

  return (
    <div>
      <h3>{playlistTitle}</h3>
      <p>{createdBy}</p>
      <img src={playlistImgUrl} alt="" />
      <p>{playlistDescription}</p>
    </div>
  )
}

export default Playlist
