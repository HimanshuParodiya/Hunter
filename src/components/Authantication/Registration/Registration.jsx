import React from "react";
import "./Registration.css";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { login, showForm } from "../../../Store/Slice/FormSlice";

const Registration = ({ title }) => {
  const loginState = useSelector((state) => state.form.login);

  const dispatch = useDispatch();
  const handleSubmite = (e) => {
    e.preventDefault();
  };

  const handleOverlay = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="registration__container">
      <div className="overlay" onClick={() => dispatch(showForm(false))}>
        <div className="registration__form" onClick={handleOverlay}>
          <div className="registrationForm__heading">{title}</div>
          <div className="registrationForm__form">
            <form onSubmit={handleSubmite}>
              <input
                className="registrationForm__input"
                type="email"
                placeholder="Email"
              />
              <input
                className="registrationForm__input"
                type="password"
                placeholder="Password"
              />
              <button type="submite" className="registrationForm__loginButton">
                {title}
              </button>
            </form>
            <div
              className="goFor__signup"
              onClick={() => dispatch(login(!loginState))}
            >
              Not {loginState ? "signup" : "login"} yet?
            </div>
          </div>
          <div className="closeForm" onClick={() => dispatch(showForm(false))}>
            <IoCloseSharp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
