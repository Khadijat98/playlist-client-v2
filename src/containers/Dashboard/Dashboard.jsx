import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import ViewPlaylists from '../ViewPlaylists/ViewPlaylists';
import CreatePlaylistForm from '../../components/CreatePlaylistForm/CreatePlaylistForm';

const Dashboard = () => {
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const getPlaylists = () => {
      fetch("http://localhost:8080/playlists")
      .then(response => response.json())
      .then(playlistObject => setPlaylists(playlistObject))
      .catch(error => console.log(error))
    }
    getPlaylists();
  }, [playlists])

  return (
    <div>
      <Router >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/playlist/create" element={<CreatePlaylistForm />}/>
          <Route path="/playlists" element={<ViewPlaylists playlists={playlists} />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Dashboard;
