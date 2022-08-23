import React from "react";
// import "./ErrorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="error-page flex flex-col items-center justify-center gap-6 p-8 desktop-xl:gap-12">
          <h1 className="error-page__header text-6xl font-semibold drop-shadow-header desktop:text-9xl desktop-xl:text-[12rem] desktop-xxl:text-[16rem]">
            Oops!
          </h1>
          <h2 className="error-page__sub-header text-2xl font-semibold desktop-xl:text-5xl">
            Error 404: Page Not Found
          </h2>
          <p className="error-page__description text-xl desktop-xl:text-4xl">
            This wasn't what you were looking for, but I think this might be
            &#8594;{" "}
            <Link
              to="/"
              className="underline underline-offset-4 hover:drop-shadow-link font-semibold"
            >
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
