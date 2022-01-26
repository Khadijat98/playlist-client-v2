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
      .then((response) => {
        response.json();
        window.location.reload();
      })
      .catch((err) => console.log(err));
    event.target.reset();
    alert("Your playlist was created successfully! Click View Playlists to see your creation!")
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
    <div className="create-playlist-form">
      <h2 className="create-playlist-form__header">Create Your Playlist!</h2>
      <form className="create-playlist-form__content" onSubmit={handleSubmit}>
        <label htmlFor="fullname" className="create-playlist-form__input-header">Your Name:</label>
        <input
          maxLength={50}
          required
          placeholder="Your name/nickname here. Max. characters: 50."
          className="create-playlist-form__input create-playlist-form__full-name"
          type="text"
          name="fullname"
          onInput={(event) =>
            setPlaylist({ ...playlist, createdBy: event.target.value })
          }
        />

        <label htmlFor="playlistname" className="create-playlist-form__input-header">Playlist Name:</label>
        <input
          maxLength={100}
          required
          placeholder="This can be as general or as descriptive as you want! Max. characters: 100."
          className="create-playlist-form__input create-playlist-form__playlist-name"
          type="text"
          name="playlistname"
          onInput={(event) => {
            setPlaylist({ ...playlist, playlistTitle: event.target.value })
          }}
        />

        <label htmlFor="songselection" className="create-playlist-form__input-header">Song Selection:</label>
        <select
          required
          multiple
          className="create-playlist-form__input create-playlist-form__song-selection"
          name="songselection"
          id=""
          onChange={(value) => {
            let idArr = [];
            for (let i = 0; i < value.target.selectedOptions.length; i++) {
              const songId = value.target.selectedOptions[i].index + 1;
              idArr.push(songId.toString())
            }
            setPlaylist({ ...playlist, songID: idArr.join(", ") });
          }}
        >
          <option value="" disabled>Please use ctrl/cmd + mouseclick to select multiple options!</option>
          {getSong()}
        </select>

        <label htmlFor="playlistdescription" className="create-playlist-form__input-header">Playlist Description:</label>
        <textarea
          maxLength={500}
          required
          placeholder="A summary of your playlist...general mood/vibes? Max. characters: 500."
          className="create-playlist-form__input"
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

        <label htmlFor="playlistimage" className="create-playlist-form__input-header">Playlist Image:</label>
        <input
          required
          placeholder="Paste the image URL here"
          className="create-playlist-form__input create-playlist-form__img-url"
          type="text"
          name="playlistimage"
          onInput={(event) =>
            setPlaylist({ ...playlist, playlistImgUrl: event.target.value })
          }
        />

        <button className="create-playlist-form__button" type="submit">Create Playlist</button>
      </form>
    </div>
  );
};

export default CreatePlaylistForm;
