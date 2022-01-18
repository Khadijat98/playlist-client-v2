import React from 'react';
import "./ViewPlaylists.scss"
// this renders playlist by mapping  

const ViewPlaylists = () => {

  fetch("http://localhost:8080/playlists")
  .then(response => response.json())
  .then(data => {
    data[0].songID.trim().split(",").map(song => {
      song = Number(song)
      fetch(`http://localhost:8080/song/${song}`)
      .then(response => response.json())
      .then(songObject => {
        console.log(songObject)
      })
    })
  })

  return (
    <div>
      <h1>This is the view playlists page</h1>
      {/* This should render all created playlists - post fetch method */}
    </div>
  )
}

export default ViewPlaylists;
