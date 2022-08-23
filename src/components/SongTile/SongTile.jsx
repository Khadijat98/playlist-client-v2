import React from "react";
// import "./SongTile.scss";

const SongTile = (props) => {
  return (
    <>
      {props.songs.map((song) => {
        return (
          <div className="song-tile grid gap-6 grid-cols-3 justify-center items-center p-1 tablet:p-2 desktop:grid-cols-5 desktop-xl:grid-cols-8 ">
            <img
              className="song-tile__img col-span-1 w-[100px] h-[100px] border-2 rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px]"
              src={song.song_image}
              alt="song cover icon"
            />
            <p className="song-tile__title col-span-2 font-semibold desktop:col-span-4 desktop:col-start-2 desktop:col-end-6 desktop-xl:row-span-7 desktop-xl:col-start-2 desktop-xl:col-end-8 self-center text-sm desktop:text-base desktop-xl:text-xl">
              {song.song_name}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default SongTile;
