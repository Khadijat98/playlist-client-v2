import React, { useState } from 'react';
import SongTile from '../SongTile/SongTile';

const Playlist = (props) => {
  const {
    playlistTitle,
    playlistImgUrl,
    createdBy,
    playlistDescription,
    songID
  } = props.playlist

  const [songs, setSongs] = useState("");
  const songArray = [];
  const getSongs = () => {
    songID.trim().split(", ").map(song => {
      fetch(`http://localhost:8080/song/${song}`)
      .then(response => response.json())
      .then(songObject => {
        songArray.push(songObject)
      })
    })
  };

  const showSongs = () => {
   getSongs();
   setTimeout(() => {
     if (songArray.length > 0) {
       setSongs(songArray);
     } 
   }, 100)
  };

  const hideSongs = () => {
    setSongs(false);
    songArray.length = 0;
  };

  return (
    <div>
      <h3>{playlistTitle}</h3>
      <p>{createdBy}</p>
      <img src={playlistImgUrl} alt="playlist icon" />
      <p>{playlistDescription}</p>
      <div>
        {songs && <SongTile songs={songs} />}
      </div>
      <button onClick={showSongs}>Show Songs</button>
      <button onClick={hideSongs}>Hide Songs</button>
    </div>
  )
}

export default Playlist;
