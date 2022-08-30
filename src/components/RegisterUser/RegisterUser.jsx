import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import Nav from "../../containers/Nav/Nav";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useCookies } from "react-cookie";
import RegisterErrorDialogBox from "../RegisterErrorDialogBox/RegisterErrorDialogBox";

const RegisterUser = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const [cookie, setCookie] = useCookies(["user"]);
  const token = cookie;

  const navigate = useNavigate();

  const validationSchema = object({
    name: string().required("Please enter your name"),
    email: string()
      .email("Please include a valid email")
      .required("Please enter your email address"),
    password: string()
      .min(8, "Your password must have a minimum of 8 characters")
      .max(255, "Your password must be a maximum of 255 characters")
      .required("Please enter a password"),
  });

  const { mutate } = useMutation(async (user) => {
    const response = await fetch("https://playlist.test/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status >= 400) {
      throw new Error(
        "Sorry, looks like this email has already been used. Please try again with a new email"
      );
    }

    const accessToken = await response.text();

    setCookie("user", accessToken);
  });

  const handleSubmit = (vals) => {
    mutate(vals, {
      onSuccess: () => {
        navigate("/");
      },
      onError: () => setDialogIsOpen(true),
    });
  };

  return (
    <>
      <Nav />
      <RegisterErrorDialogBox
        open={dialogIsOpen}
        onClose={() => setDialogIsOpen(false)}
      />
      {token.user === undefined ? (
        <div className="grid auto-cols-fr justify-center items-center p-8">
          <h1 className="desktop-xl:text-3xl font-semibold text-center drop-shadow-header py-12">
            Sign Up
          </h1>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form className="grid auto-rows-fr justify-center items-center grid-cols-5 gap-4 m-3 p-8 text-xs tablet:text-base bg-lilac-light shadow-playlist rounded-tl-[10px] rounded-br-[10px] rounded-tr-[40px] rounded-bl-[40px] border desktop-xl:grid-cols-11">
              <label
                htmlFor="name"
                className="col-span-1 font-semibold desktop-xl:text-xl drop-shadow-subHeader"
              >
                Name:
              </label>
              <Field
                className="playlist-form__input playlist-form__full-name col-span-3 desktop-xl:col-span-9 border bg-white rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] text-xs tablet:text-base desktop-xl:text-xl h-8"
                name="name"
                type="text"
              />
              <div className="col-span-1 text-pink font-semibold text-xs desktop-xl:text-base pr-4">
                <ErrorMessage name="name" />
              </div>

              <label
                htmlFor="email"
                className="col-span-1 font-semibold desktop-xl:text-xl drop-shadow-subHeader"
              >
                Email:
              </label>
              <Field
                className="playlist-form__input playlist-form__playlist-name col-span-3 desktop-xl:col-span-9 border bg-white rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] text-xs tablet:text-base desktop-xl:text-xl h-8"
                name="email"
                type="text"
              />
              <div className="col-span-1 text-pink font-semibold text-xs desktop-xl:text-base pr-2">
                <ErrorMessage name="email" />
              </div>

              <label
                htmlFor="password"
                className="col-span-1 font-semibold desktop-xl:text-xl drop-shadow-subHeader"
              >
                Password:
              </label>
              <Field
                name="password"
                className="col-span-3 desktop-xl:col-span-9 border bg-white rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] text-xs tablet:text-base desktop-xl:text-xl h-8"
                type="password"
              />
              <div className="col-span-1 text-pink font-semibold text-xs desktop-xl:text-base pr-2">
                <ErrorMessage name="password" />
              </div>

              <button
                className="border border-black rounded-tl-[2px] rounded-br-[2px] rounded-tr-[7px] rounded-bl-[7px] col-start-3 bg-purple shadow-purpleBtn text-white hover:bg-purple-hover active:shadow-sm active:translate-x-[1px] active:translate-y-[2px] desktop-xl:text-xl desktop-xl:col-start-6 py-2"
                type="submit"
              >
                Sign Up
              </button>
            </Form>
          </Formik>
        </div>
      ) : (
        <p className="font-semibold text-center p-16 desktop-xxl:text-3xl">
          Sorry, it looks like you're already logged in so you can't view this
          page!
        </p>
      )}
    </>
  );
};

export default RegisterUser;
