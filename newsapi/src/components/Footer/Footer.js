import React from "react";
import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import ScrollButton from "../ScrollButton";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        NEWS APP
      </span>
      <div className="iconContainer">
        <a href="https://www.linkedin.com/in/bhumika-patidar-b526511b7/" target="__blank">
          <LinkedInIcon className="icon-color" />
        </a>
        <a href="https://github.com/bhumikapatidar" target="__blank">
          <GitHubIcon className="icon-color" />
        </a>
        <a href="/" target="__blank">
          <LinkIcon className="icon-color" />
        </a>
        <div className="scrollbutton">
          <ScrollButton />
        </div>
        

      </div>

    </div>
  );
};

export default Footer;