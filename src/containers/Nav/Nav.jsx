import React from "react";
import { Link } from "react-router-dom";
// import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav flex flex-col justify-end items-end gap-2 p-2 border-b-2 w-[92%]">
      <Link
        className="nav__link desktop-xl:text-2xl font-semibold hover:drop-shadow-link"
        to="/"
      >
        Home
      </Link>
      <Link
        className="nav__link desktop-xl:text-2xl font-semibold hover:drop-shadow-link"
        to="/playlist/create"
      >
        Create Playlist
      </Link>
      <Link
        className="nav__link desktop-xl:text-2xl font-semibold hover:drop-shadow-link"
        to="/playlists"
      >
        View Playlists
      </Link>
    </div>
  );
};

export default Nav;
