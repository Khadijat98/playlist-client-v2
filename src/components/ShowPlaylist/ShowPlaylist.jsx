import React, { useState } from "react";
import Nav from "../../containers/Nav/Nav";
import SongTile from "../SongTile/SongTile";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import DeleteDialogBox from "../DeleteDialogBox/DeleteDialogBox";
import { useCookies } from "react-cookie";
// import "./ShowPlaylist.scss";

const ShowPlaylist = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const [cookie, setCookie] = useCookies(["user"]);
  const token = cookie;

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const queryClient = useQueryClient();

  const getPlaylist = async () => {
    const request = await fetch(`https://playlist.test/api/playlist/${id}`, {
      headers: {
        Authorization: "Bearer " + token.user,
      },
    });
    const json = await request.json();
    return json;
  };

  const {
    isLoading,
    isError,
    data: playlist = {},
    error,
  } = useQuery(["playlist", 1], getPlaylist);

  const { playlist_name, playlist_image, description, songs = [] } = playlist;

  const fetchUser = async () => {
    const request = await fetch("https://playlist.test/api/user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.user,
      },
    });
    const json = await request.json();
    return json;
  };

  const { data = {} } = useQuery(["user"], fetchUser);

  const navigate = useNavigate();

  const editPlaylist = () => {
    navigate("/playlist/edit?id=" + id);
  };

  const returnToPlaylists = () => {
    navigate("/playlists");
  };

  const deletePlaylist = () => {
    fetch(`https://playlist.test/api/playlist/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token.user,
      },
    });
  };

  const { mutate } = useMutation(deletePlaylist, {
    onSuccess: () => {
      setDialogIsOpen(false);
      queryClient.invalidateQueries(["playlists"]);
      setTimeout(() => {
        navigate("/playlists");
      }, 1000);
    },
  });

  const handleDelete = () => {
    mutate();
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Nav />
      <DeleteDialogBox
        open={dialogIsOpen}
        onClose={() => setDialogIsOpen(false)}
        onDelete={handleDelete}
      />
      <div className="show-playlist-container grid grid-cols-1 justify-center p-40">
        <div className="show-playlist grid items-center max-w-[1000px] justify-self-center p-12 gap-8 border-2 rounded-tl-[10px] rounded-br-[10px] rounded-tr-[40px] rounded-bl-[40px] bg-lilac-light shadow-playlist">
          <div className="show-playlist__header flex justify-between gap-12">
            <h1 className="show-playlist__title justify-self-center drop-shadow-title font-semibold desktop-xl:text-3xl">
              {playlist_name}
            </h1>
            <div className="show-playlist__button flex justify-right gap-4">
              <button
                className="show-playlist__button--edit text-xs p-1 tablet:p-2 border border-black rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] desktop:text-sm desktop-xl:text-lg bg-purple shadow-purpleBtn hover:bg-purple-hover text-white active:shadow-sm active:translate-x-[1px] active:translate-y-[2px]"
                onClick={editPlaylist}
              >
                Edit Playlist
              </button>
              <button
                className="show-playlist__button--return text-xs p-1 tablet:p-2 border rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] desktop:text-sm desktop-xl:text-lg bg-white shadow-whiteBtn hover:bg-white-hover active:shadow-sm active:translate-x-[1px] active:translate-y-[2px]"
                onClick={returnToPlaylists}
              >
                Return
              </button>
              <button
                className="show-playlist__button--delete text-xs p-1 tablet:p-2 border border-black rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] desktop:text-sm desktop-xl:text-lg bg-pink shadow-pinkBtn hover:bg-pink-hover text-white active:shadow-sm active:translate-x-[1px] active:translate-y-[2px]"
                onClick={() => {
                  setDialogIsOpen(true);
                }}
              >
                Delete Playlist
              </button>
            </div>
          </div>
          <p className="show-playlist__author justify-self-center font-semibold desktop-xl:text-2xl">
            By: {data.name}
          </p>
          <img
            className="show-playlist__img justify-self-center w-[300px] h-[300px] border desktop-xl:w-[500px] desktop-xl:h-[500px] rounded-tl-[5px] rounded-br-[5px] rounded-tr-[10px] rounded-bl-[10px]"
            src={playlist_image}
            alt="playlist icon"
          />
          <p className="show-playlist__description justify-self-center italic desktop-xl:text-2xl">
            {description}
          </p>
          <div className="show-playlist__songs desktop-xl:text-2xl">
            {<SongTile songs={songs} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPlaylist;
