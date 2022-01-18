import React, { useState} from 'react';
import "./CreatePlaylistForm.scss"
// This should render the song component as a select input in the form, then fetch the songs from the /songs endpoint, then map through them
// to create options which the user can select

const CreatePlaylistForm = () => {
  const [playlist, setPlaylist] = useState({
    playlistTitle: "",
    playlistImgUrl: "",
    createdBy: "",
    playlistDescription: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:8080/playlist/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(playlist)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    event.target.reset();
  }

  return (
    <div>
      
    </div>
  )
}

export default CreatePlaylistForm;
