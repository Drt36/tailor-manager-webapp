import React from "react";
import "../assets/css/footer.css";
import { AiFillFacebook,AiFillYoutube,AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className='link-center'>
        <p className="footer__copyright">
          &#169; 2021 copyright all right reserved{" "}
          <span className="highlight">Tailor Manager</span>
        </p>
        <div className='social-links'>
            <AiFillFacebook/>
            <AiFillYoutube/>
            <AiFillGithub/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;