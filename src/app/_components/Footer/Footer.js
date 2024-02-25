import React from 'react';
import { Logo } from '../Logo';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-8 mt-8 px-72  ">

      <div className="container mx-auto flex justify-between items-center">
      <Logo/>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
