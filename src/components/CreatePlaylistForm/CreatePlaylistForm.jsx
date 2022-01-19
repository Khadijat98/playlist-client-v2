import React, { useState, useEffect } from "react";
import "./CreatePlaylistForm.scss";
import Song from "../Song/Song";

const CreatePlaylistForm = () => {
  const [playlist, setPlaylist] = useState({
    playlistTitle: "",
    playlistImgUrl: "",
    createdBy: "",
    playlistDescription: "",
    songID: "",
  });

  const [song, setSong] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/playlist/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playlist),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    event.target.reset();
  };


  useEffect(() => {
    const getSongs = () => {
      fetch("http://localhost:8080/songs")
        .then((response) => response.json())
        .then((songObject) => setSong(songObject));
    };
    getSongs();
  }, []);

  const getSong = () =>
    song.map((song, index) => {
      return <Song songTitle={song.songTitle} key={index + 1} />;
    });

  return (
    <div>
      <h2>Create Your Playlist!</h2>
      <form className="create-playlist-form" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Your Name:</label>
        <input
          className="create-playlist-form__input"
          type="text"
          name="fullname"
          onInput={(event) =>
            setPlaylist({ ...playlist, createdBy: event.target.value })
          }
        />

        <label htmlFor="playlistname">Playlist Name:</label>
        <input
          className="create-playlist-form__input"
          type="text"
          name="playlistname"
          onInput={(event) => {
            setPlaylist({ ...playlist, playlistTitle: event.target.value })
          }}
        />

        <label htmlFor="songselection">Song Selection:</label>
        <select
          multiple
          className="create-playlist-form__input"
          name="songselection"
          id=""
          onChange={(value) => {
            let idArr = [];
            for (let i = 0; i < value.target.selectedOptions.length; i++) {
              const songId = value.target.selectedOptions[i].index + 1;
              idArr.push(songId.toString())
            }
            console.log(idArr.join(", "))
            setPlaylist({ ...playlist, songID: idArr.join(", ") });
          }}
        >
          {getSong()}
        </select>

        <label htmlFor="playlistdescription">Playlist Description:</label>
        <textarea
          name="playlistdescription"
          id=""
          cols="30"
          rows="10"
          onInput={(event) =>
            setPlaylist({
              ...playlist,
              playlistDescription: event.target.value,
            })
          }
        ></textarea>

        <label htmlFor="playlistimage">Playlist Image:</label>
        <input
          className="create-playlist-form__input"
          type="text"
          name="playlistimage"
          onInput={(event) =>
            setPlaylist({ ...playlist, playlistImgUrl: event.target.value })
          }
        />

        <button type="submit">Create Playlist</button>
      </form>
    </div>
  );
};

export default CreatePlaylistForm;
