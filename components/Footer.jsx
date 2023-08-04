import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex justify-start items-center sm:gap-2 sm:flex-row flex-col">
          <p>Developed By Vikrant Kumar.</p>
          <div className="font-thin rounded py-1 px-2 flex justify-start items-center gap-2">
            <span className="text-sm">Connect With Me On : </span>
            <span className="cursor-pointer text-blue-500 text-xl">
              <BsLinkedin />
            </span>
            <span className="cursor-pointer text-blue-500 text-xl">
              <BsGithub />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
