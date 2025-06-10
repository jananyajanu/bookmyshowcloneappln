import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-darkBackground-700 px-4 py-3 ">
      <div className="flex justify-center items-center ">
        <div className="flex items-center">
          <FaFacebook />
          <FaGithub />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
          <FaPinterest />
          <FaLinkedin />
        </div>
      </div>
      <span className="text-gray-400 text-xs flex items-center text-center">
        Copyright 2025 © Bigtree Enterainment Pvt Ltd. All Rights Reserved.
        <br /> The content and images used on this site are copyright protected
        and copyrights vests with the respective owners. The usage of the
        content and images on this website is intent to promote the works and no
        endorsement of the artist shall be impiles. <br />
        Unauthorized use is prohibited and punishable by law.
      </span>
    </div>
  );
}

export default Footer;
