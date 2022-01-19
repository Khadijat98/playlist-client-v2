import React from 'react';
import Playlist from '../../components/Playlist/Playlist';
import "./ViewPlaylists.scss"
// this renders playlist by mapping  

const ViewPlaylists = (props) => {
  const {playlists} = props;
  // fetch("http://localhost:8080/playlists")
  // .then(response => response.json())
  // .then(data => {
  //   data[0].songID.trim().split(",").map(song => {
  //     song = Number(song)
  //     fetch(`http://localhost:8080/song/${song}`)
  //     .then(response => response.json())
  //     .then(songObject => {
  //       console.log(songObject)
  //     })
  //   })
  // })

  return (
    <div className="view-playlists">
      <h2 className="view-playlists__header">Playlists</h2>
      <div className="view-playlists__container">
        {playlists && playlists.map(playlist => <Playlist key={playlist.id} playlist={playlist}/>)} 
      </div>
    </div>
  )
}

export default ViewPlaylists;
