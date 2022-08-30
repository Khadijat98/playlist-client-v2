import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// import "./Nav.scss";

const Nav = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  const token = cookie;

  const navigate = useNavigate();
  
  const handleLogout = () => {
    removeCookie("user");
    navigate("/");
  }

  return (
    <div className="nav flex flex-col justify-end items-end gap-2 p-2 border-b-2 w-[92%]">
      {token.user === undefined ? (
        <>
          <Link
            className="nav__link desktop-xl:text-2xl font-semibold hover:drop-shadow-link"
            to="/"
          >
            Home
          </Link>
          <Link
            className="nav__link desktop-xl:text-2xl font-semibold hover:drop-shadow-link"
            to="/register"
          >
            Sign Up
          </Link>
          <Link
            className="nav__link desktop-xl:text-2xl font-semibold hover:drop-shadow-link"
            to="/login"
          >
            Log In
          </Link>
        </>
      ) : (
        <>
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
          <button
            className=" desktop-xl:text-2xl font-semibold hover:drop-shadow-link"
            to="/"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

export default Nav;
