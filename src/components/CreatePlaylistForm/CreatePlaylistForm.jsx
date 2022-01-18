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
    .then(response => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    event.target.reset();
  }

  const getSongs = () => {
    fetch("http://localhost:8080/songs")
    .then(response => response.json())
    .then(songObject => console.log(songObject)) // can't seem to see this? hmm
  }

  return (
      <form className="create-playlist-form" onSubmit={handleSubmit}>
        <input className="create-playlist-form__input" type="text" placeholder="Your Name"/>
        <input className="create-playlist-form__input" type="text" placeholder="Playlist Title"/>
        <select className="create-playlist-form__input" name="" id="">

        </select>
      </form>
  )
}

export default CreatePlaylistForm;
