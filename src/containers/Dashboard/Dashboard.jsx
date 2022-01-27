import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import ViewPlaylists from '../ViewPlaylists/ViewPlaylists';
import CreatePlaylistForm from '../../components/CreatePlaylistForm/CreatePlaylistForm';
import ErrorPage from '../ErrorPage/ErrorPage';

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
  }, [])

  return (
    <div>
      <Router >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/playlist/create" element={<CreatePlaylistForm />}/>
          <Route path="/playlists" element={<ViewPlaylists playlists={playlists} />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Dashboard;