import React from "react";
import "./Authantication.css";
import Registration from "./Registration/Registration";
import { useSelector } from "react-redux";

const Authantication = () => {
  const login = useSelector((state) => state.form.login);
  return (
    <div>
      {login ? <Registration title="Login" /> : <Registration title="Signup" />}
    </div>
  );
};

export default Authantication;
