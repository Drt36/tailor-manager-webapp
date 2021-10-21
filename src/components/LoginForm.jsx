import React, { useState } from "react";
import "../assets/css/login-form.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const checkInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-form-div">
      <h1 className="login-form-div__title">Welcome !</h1>
      <h2 className="login-form-div__subtitle">Login here to continue.</h2>
      <form className="login-form" onSubmit={handelSubmit}>
        <div className="input-wrapper">
          <FaUser />
          <input
            type="email"
            className="login-form__email"
            name="email"
            value={loginUser.email}
            onChange={checkInput}
            autoComplete="off"
            placeholder="Email*"
            required
          />
        </div>
        <div className="input-wrapper">
          <RiLockPasswordFill />
          <input
            type="password"
            className="login-form__password"
            name="password"
            value={loginUser.password}
            onChange={checkInput}
            autoComplete="off"
            placeholder="Password*"
            required
            minlength="8"
          />
        </div>
        <button className="login-form__btn" type="submit">
          Login
        </button>
      </form>
      <NavLink to={"/forget"}>Forget password?</NavLink>
    </div>
  );
};

export default LoginForm;
