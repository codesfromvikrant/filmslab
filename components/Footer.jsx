import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-4">
      <div className="container flex justify-center items-center">
        <div className="flex justify-start items-center gap-2">
          <p>Developed By Vikrant Kumar.</p>
          <div className="text-blue-500 rounded py-1 px-2 flex justify-start items-center gap-2">
            <span>Connect With Me On : </span>
            <span className="cursor-pointer">
              <BsLinkedin />
            </span>
            <span className="cursor-pointer">
              <BsGithub />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
