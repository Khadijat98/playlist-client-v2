import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__link" to="/">Home</Link>
      <Link className="nav__link" to="/playlist/create">Create Playlist</Link>
      <Link className="nav__link" to="/playlists">View Playlists</Link>
    </div>
  )
}

export default Nav;
