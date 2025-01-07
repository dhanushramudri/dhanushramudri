import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://github.com/dhanushramudri"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <FaGithub />
      </div>
    </a>
    <a
      href="https://www.linkedin.com/in/dhanush-ramudri-09392124b/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <FaLinkedinIn />
      </div>
    </a>
    <a
      href="https://twitter.com/Dhanush_Ramudri"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <BsTwitter />
      </div>
    </a>
  </div>
);

export default SocialMedia;
