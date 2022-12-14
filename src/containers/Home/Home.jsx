import React from "react";
// import "./Home.scss";
import Nav from "../Nav/Nav";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const [cookie, setCookie] = useCookies(["user"]);
  const token = cookie;

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

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center h-[85vh] p-4">
        <div className="home text-center flex flex-col gap-4 justify-center items-center border-2 py-3 px-4 desktop:p-8 desktop-xxl:p-12 bg-lilac-light h-80 rounded-tl-[10px] rounded-br-[10px] rounded-tr-[40px] rounded-bl-[40px] shadow-home desktop:gap-6 desktop-lg:gap-10 desktop-xxl:gap-12">
          {token.user === undefined ? (
            <h1 className="home__header mobile-lg:text-2xl drop-shadow-header font-semibold desktop-xl:text-4xl">
              Welcome to Borahae Playlists!
            </h1>
          ) : (
            <h1 className="home__header mobile-lg:text-2xl drop-shadow-header font-semibold desktop-xl:text-4xl">
              Hey {data.name}! Welcome to Borahae Playlists!
            </h1>
          )}
          <p className="home__description mobile-lg:text-xl desktop-xl:text-3xl drop-shadow-subHeader font-bold">
            A place for lovers of global pop icons, BTS, to create and view
            their own playlists from a large collection of the group's songs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
