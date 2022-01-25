import React from 'react';
import Playlist from '../../components/Playlist/Playlist';
import "./ViewPlaylists.scss" 

const ViewPlaylists = (props) => {
  const {playlists} = props;
  
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