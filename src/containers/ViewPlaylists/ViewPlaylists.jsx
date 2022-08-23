import React from "react";
import Playlist from "../../components/Playlist/Playlist";
import Nav from "../Nav/Nav";
// import "./ViewPlaylists.scss"
import { useQuery } from "@tanstack/react-query";

const ViewPlaylists = () => {
  const fetchPlaylists = async () => {
    const request = await fetch("https://playlist.test/api/playlists");
    const json = await request.json();
    return json;
  };

  const {
    isLoading,
    isError,
    data = {},
    error,
  } = useQuery(["playlists"], fetchPlaylists);
  const { data: playlists = [] } = data;

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Nav />
      <div className="view-playlists grid justify-center items-center">
        <h1 className="view-playlists__header desktop-xl:text-3xl font-semibold text-center drop-shadow-header py-12">
          Playlists
        </h1>
        <div className="view-playlists__container grid grid-cols-1 justify-center items-center desktop:grid-cols-2 desktop-xl:grid-cols-3 desktop-xxl:grid-cols-4 gap-6">
          {playlists.length === 0 ? (
            <p className="font-semibold desktop-xl:col-start-2 desktop-xl:col-end-3 desktop-xxl:col-end-4 desktop-xxl:text-3xl">
              You haven't got any playlists. Make some to see them here!
            </p>
          ) : (
            playlists.map((playlist) => (
              <Playlist key={playlist.id} playlist={playlist} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ViewPlaylists;
