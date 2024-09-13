import React from "react";
import dp from "../images/cardDpWolverine.jpg";

const Header = () => {
  return (
    <div title="Header Component">
      <header className=" info flex-col justify-center text-center bg-slate-900 text-white">
        <div className=" flex items-end justify-center p-2 pt-4">
          <div className="w-4/5 flex items-center justify-center overflow-hidden rounded-lg">
            <img src={dp} alt="profile" className="dp object-cover" />
          </div>
        </div>
        <div className="name font-semibold">Wolverine</div>
        <div className="job text-xs text-sky-200 mt-1">Web Developer</div>
        <div className="buttons m-2 flex items-center justify-center gap-5 ">
          <div className="bg-white text-black">
            <a
              href="mailto:kislayraj751@gmail.com?subject=Subject&body=Hello%20Kislay"
              target="_blank"
              rel="noopener noreferrer">
              <div className="px-2 flex items-center gap-2">
                <i className="fa-solid fa-envelope "></i>Email
              </div>
            </a>
          </div>
          <div className="bg-blue-800">
            <a
              href="https://www.linkedin.com/in/kislay-raj-b462502a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full cursor-pointer">
              <div className="px-2 flex items-center gap-2">
                <i className="fa-brands fa-linkedin"></i>LinkedIn
              </div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
