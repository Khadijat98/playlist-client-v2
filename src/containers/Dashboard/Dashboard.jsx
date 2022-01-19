import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../Nav/Nav';
import CreatePlaylist from '../CreatePlaylist/CreatePlaylist';
import Home from '../Home/Home';
import ViewPlaylists from '../ViewPlaylists/ViewPlaylists';
import CreatePlaylistForm from '../../components/CreatePlaylistForm/CreatePlaylistForm';

const Dashboard = () => {
  return (
    <div>
      <Router >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/playlist/create" element={<CreatePlaylistForm />}/>
          <Route path="/playlists" element={<ViewPlaylists />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Dashboard;
