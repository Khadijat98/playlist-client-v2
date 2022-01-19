import React from 'react';
import SongTile from '../SongTile/SongTile';
// this should contain the props for a single playlist

const Playlist = (props) => {
  const {
    playlistTitle,
    playlistImgUrl,
    createdBy,
    playlistDescription,
    songID
  } = props.playlist

  return (
    <div>
      <h3>{playlistTitle}</h3>
      <p>{createdBy}</p>
      {/* image url doesn't get converted into an icon. how do i fix this? */}
      <img src={playlistImgUrl} alt="playlist icon" />
      <p>{playlistDescription}</p>
      {/* How do i convert these ids back into the song object to access the title and image? */}
      <div>{songID}</div>
    </div>
  )
}

export default Playlist;
