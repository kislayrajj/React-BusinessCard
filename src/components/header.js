import React from "react";
import logo from "../images/logo192.png";

const Header = () => {
  return (
    <div>
      <header >
        <nav className="navbar flex justify-between text-white bg-slate-800 p-2">
          <img src = {logo} className="h-10" />
          
          <span className="text-lg mr-10 mt-1 text-blue-300">ReactFacts</span>
          <ul className=" flex list-none gap-10 m-1">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
