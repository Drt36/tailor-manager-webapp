import React from "react";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Welcome from "../components/Welcome";
import "../assets/css/login-page.css";
const LoginPage = () => {
  return (
    <>
      <div className="main-div">
        <LoginForm />
        <Welcome />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
