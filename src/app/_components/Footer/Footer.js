import React from "react";
import { Logo } from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-8 mt-8 md:px-72  px-4 w-full">
      <div className="container mx-auto flex justify-between items-center  md:flex-row flex-col">
        <Logo />
        <ul className="flex space-x-4  md:flex-row ">
          <li>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
