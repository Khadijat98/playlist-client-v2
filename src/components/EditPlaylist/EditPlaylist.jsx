import React, { useState } from "react";
import Nav from "../../containers/Nav/Nav";
// import "../../assets/sass/PlaylistForm.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { object, string, array } from "yup";
import EditDialogBox from "../EditDialogBox/EditDialogBox";
import { useCookies } from "react-cookie";

const EditPlaylist = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const [cookie, setCookie] = useCookies(["user"]);
  const token = cookie;

  const validationSchema = object({
    playlist_name: string().max(255),
    playlist_image: string(),
    description: string().max(500),
    songs: array()
      .min(1, "You can't have a playlist without at least one song ;)")
      .max(30, "Sorry, no more than thirty songs!"),
  });

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const getPlaylist = async () => {
    const request = await fetch(`https://playlist.test/api/playlist/${id}`, {
      headers: {
        Authorization: "Bearer " + token.user,
      },
    });
    const json = await request.json();
    const playlistSongs = json.songs.map((song) => song.id.toString());
    console.log({ ...json, songs: playlistSongs });
    return { ...json, songs: playlistSongs };
  };

  const {
    isLoading,
    isError,
    data: playlist = {},
    error,
  } = useQuery(["playlist", id], getPlaylist, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const navigate = useNavigate();

  const cancel = () => {
    navigate("/playlist?id=" + id);
  };

  const fetchSongs = async () => {
    const request = await fetch("https://playlist.test/api/songs", {
      headers: {
        Authorization: "Bearer " + token.user,
      },
    });
    const json = await request.json();
    return json;
  };

  const queryClient = useQueryClient();

  const { data = {} } = useQuery(["songs"], fetchSongs);
  const { data: songs = [] } = data;

  const { mutate } = useMutation(async (playlist) => {
    await fetch(`https://playlist.test/api/playlist/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.user,
      },
      body: JSON.stringify(playlist),
    });
  });

  const handleSubmit = (vals) => [
    mutate(vals, {
      onSuccess: () => {
        setDialogIsOpen(true);
        queryClient.invalidateQueries(["playlist", id]);
      },
      onError: () =>
        alert("Uh oh! Looks like something went wrong! Please try again"),
    }),
  ];

  const handleClose = () => {
    setDialogIsOpen(false);
    navigate("/playlist?id=" + id);
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
      <EditDialogBox open={dialogIsOpen} onClose={handleClose} />
      <div className="playlist-form grid auto-cols-fr justify-center items-center p-8">
        <h1 className="playlist-form__header desktop-xl:text-3xl font-semibold text-center drop-shadow-header py-12">
          Edit Your Playlist!
        </h1>
        <Formik
          enableReinitialize
          initialValues={playlist}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="playlist-form__content grid justify-center items-center grid-cols-5 gap-4 m-3 p-8 text-xs tablet:text-base bg-lilac-light shadow-playlist rounded-tl-[10px] rounded-br-[10px] rounded-tr-[40px] rounded-bl-[40px] border desktop-xxl:grid-cols-7">
            <label
              htmlFor="playlist_name"
              className="playlist-form__input-header col-span-1 row-start-1 font-semibold desktop-xl:text-xl drop-shadow-subHeader"
            >
              Playlist Name:
            </label>
            <Field
              maxLength={255}
              className="playlist-form__input playlist-form__playlist-name col-span-3 desktop-xxl:col-span-5 border bg-white rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] text-xs tablet:text-base desktop-xl:text-xl h-8"
              name="playlist_name"
              type="text"
            />

            <label
              htmlFor="songs"
              className="playlist-form__input-header col-span-1 row-start-2 font-semibold desktop-xl:text-xl drop-shadow-subHeader"
            >
              Song Selection:
            </label>
            <div className="playlist-form__input playlist-form__song-selection col-span-3 desktop-xxl:col-span-5 border bg-white rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] desktop-xl:text-xl grid gap-2 desktop-lg:grid-cols-2 desktop-lg:gap-8 desktop-xxl:grid-cols-4 h-80 overflow-auto p-4">
              {songs.map((song) => (
                <label className="playlist-form-checkbox flex gap-4 h-8 items-center">
                  {song.name}
                  <Field
                    name="songs"
                    value={song.id.toString()}
                    type="checkbox"
                    className="bg-lilac-light border-2 rounded-tl-[1px] rounded-br-[1px] rounded-tr-[5px] rounded-bl-[5px] checked:bg-purple focus:ring-purple hover:bg-purple-shadow"
                  />
                </label>
              ))}
            </div>
            <div className="playlist-form__error-message col-span-1 text-pink font-semibold text-xs desktop-xl:text-base pr-4">
              <ErrorMessage name="songs" />
            </div>

            <label
              htmlFor="description"
              className="playlist-form__input-header col-span-1 font-semibold desktop-xl:text-xl drop-shadow-subHeader"
            >
              Playlist Description:
            </label>
            <Field
              component="textarea"
              maxLength={500}
              rows="5"
              className="playlist-form__input col-span-3 desktop-xxl:col-span-5 border bg-white rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] text-xs tablet:text-base desktop-xl:text-xl"
              name="description"
            />

            <label
              htmlFor="playlist_image"
              className="playlist-form__input-header col-span-1 row-start-4 font-semibold desktop-xl:text-xl drop-shadow-subHeader"
            >
              Playlist Image:
            </label>
            <Field
              name="playlist_image"
              className="playlist-form__input playlist-form__img-url col-span-3 desktop-xxl:col-span-5 border bg-white rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] text-xs tablet:text-base desktop-xl:text-xl h-8"
              type="text"
            />

            <div className="playlist-form__button-container row-start-5 col-start-3 flex gap-8 py-8 justify-center desktop-xxl:col-start-4">
              <button
                onClick={() => {
                  setDialogIsOpen(true);
                }}
                className="playlist-form__button border border-black rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] desktop-xl:text-xl p-2 bg-purple shadow-purpleBtn text-white hover:bg-purple-hover active:shadow-sm active:translate-x-[1px] active:translate-y-[2px]"
                type="submit"
              >
                Save Playlist
              </button>
              <button
                className="playlist-form__button playlist-form__button--cancel border border-black rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] desktop-xl:text-xl p-2 bg-pink shadow-pinkBtn text-white hover:bg-pink-hover active:shadow-sm active:translate-x-[1px] active:translate-y-[2px]"
                onClick={cancel}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default EditPlaylist;
