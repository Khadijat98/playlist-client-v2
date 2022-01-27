import React from 'react';
import "./Home.scss";
import Nav from '../Nav/Nav';

const Home = () => {
  return (
    <>
    <Nav />
      <div className="home__img"></div>
      <div className="home">
        <h1 className="home__header">Welcome to Borahae Playlists!</h1>
        <p className="home__description">A place for lovers of global pop icons, BTS, to create and view their own playlists from a large collection of the group's songs.</p>
      </div>
    </>
  )
}

export default Home;
