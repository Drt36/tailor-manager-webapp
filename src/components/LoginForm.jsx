import React, { useState } from "react";
import "../assets/css/login-form.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { sendPostRequest } from "../services/PostService";
import { useHistory } from "react-router";

const LoginForm = () => {
  const history = useHistory();
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const [responseData, setResponseData] = useState({
    data: undefined,
    error: undefined,
    loading: false,
  });

  const checkInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseData({ data: undefined, error: undefined, loading: true });
    const { data, error, loading } = await sendPostRequest("api/login",loginUser);
    setResponseData({ data: data, error: error, loading: loading });
    if (data !== undefined) {
      if (data.role === "ADMIN") {
        history.push(`/admin/dashboard/${data.email}`);
      }
      if (data.role === "USER") {
        history.push(`/user/dashboard/${data.email}`);
      }
    }
  };

  return (
    <div className="login-form-div">
      <h1 className="login-form-div__title">Welcome !</h1>
      <h2 className="login-form-div__subtitle">Login here to continue.</h2>
      {responseData.error?(<p className="error">Ooops! Bad Credentials.{responseData.error}</p>):(" ")}
      {responseData.loading?(<p className="loading">Authenticating...</p>):("")}
      <form className="login-form" onSubmit={handleSubmit}>
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
