import React from "react";
import "../assets/css/footer.css";
import { AiFillFacebook,AiFillYoutube,AiFillGithub } from "react-icons/ai";
import { NavLink} from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className='link-center'>
        <p className="footer__copyright">
          &#169; 2021 copyright all right reserved{" "}
          <span className="highlight">Tailor Manager</span>
        </p>
        <div className='social-links'>
            <NavLink to={{ pathname: "https://www.facebook.com/" }} target="_blank" ><AiFillFacebook/></NavLink>
            <NavLink to={{ pathname: "https://www.youtube.com/" }} target="_blank" ><AiFillYoutube/></NavLink>
            <NavLink to={{ pathname: "https://github.com/drt36" }} target="_blank" ><AiFillGithub/></NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;