import React, { useEffect, useState } from 'react';
import SongTile from '../SongTile/SongTile';
import Song from '../Song/Song';
// this should contain the props for a single playlist

const Playlist = (props) => {
  const {
    playlistTitle,
    playlistImgUrl,
    createdBy,
    playlistDescription,
    songID
  } = props.playlist

  let cleanSong = songID.trim().split(",")

  const [song, setSong] = useState("");

  // useEffect(() => {
  //   const getSongs = () => {
  //     fetch("http://localhost:8080/songs")
  //       .then((response) => response.json())
  //       .then((songObject) => {
  //         for (let i = 0; i < songObject.length; i++) {
  //           if (songObject[i].id == Number(cleanSong)) {
              
  //           }
  //         }

  //       }
  //       // console.log(songObject));
  //   };
  //   getSongs();
  // }, []);

  // const getSongTile = () =>
  //   song.map((song, index) => {
  //     return <SongTile songTitle={song.songTitle} songMediaUrl={song.songMediaUrl} key={index} />;
  //   });

  // useEffect(() => {
  //   fetch(`http://localhost:8080/song/${song}`)
  //   .then(response => response.json())
  //   .then(songObject => console.log(songObject))
  // })

  // useEffect(() => {
  //   const getSongById = () => {
  //     fetch(`http://localhost:8080/song/${cleanSong}`)
  //       .then((response) => response.json())
  //       .then((songObject) => console.log(songObject));
  //   };
  //   getSongById();
  // }, []);

  


  return (
    <div>
      <h3>{playlistTitle}</h3>
      <p>{createdBy}</p>
      {/* image url doesn't get converted into an icon. how do i fix this? */}
      <img src={playlistImgUrl} alt="playlist icon" />
      <p>{playlistDescription}</p>
      {/* How do i convert these ids back into the song object to access the title and image? */}
      <div>
        <SongTile />
      </div>
      <div>
        {cleanSong}
      </div>
    </div>
  )
}

export default Playlist;
