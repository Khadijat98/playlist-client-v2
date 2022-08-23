import { useNavigate } from "react-router-dom";
// import "./Playlist.scss";

const Playlist = (props) => {
  const { id, playlist_name, playlist_image, created_by, description } =
    props.playlist;

  const navigate = useNavigate();

  const viewDetails = () => {
    navigate("/playlist?id=" + id);
  };

  return (
    <div className="playlist grid grid-cols-1 m-3 p-8 gap-6 border-2 rounded-tl-[10px] rounded-br-[10px] rounded-tr-[40px] rounded-bl-[40px] bg-lilac-light shadow-playlist desktop-lg:gap-10">
      <h2 className="playlist__title justify-self-center desktop-lg:text-2xl drop-shadow-title desktop-xl:text-3xl">
        {playlist_name}
      </h2>
      <p className="playlist__author justify-self-center desktop-xl:text-2xl">
        By: {created_by}
      </p>
      <img
        className="playlist__img justify-self-center w-[300px] h-[200px] border-2 rounded-tl-[5px] rounded-br-[5px] rounded-tr-[10px] rounded-bl-[10px]"
        src={playlist_image}
        alt="playlist icon"
      />
      <p className="playlist__description justify-self-center italic desktop-xl:text-2xl">
        {description}
      </p>
      <div className="playlist__button flex justify-center gap-1">
        <button
          className="playlist__button--view border border-black rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] p-3 bg-purple text-white shadow-purpleBtn hover:bg-purple-hover active:shadow-sm active:translate-x-[1px] active:translate-y-[2px] desktop-xl:text-2xl"
          onClick={viewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Playlist;
