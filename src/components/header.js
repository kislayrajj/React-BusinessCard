import React from "react";
import dp from "../images/krmoon.jpg"

const Header = () => {
  return (
    <div>
      <header className=" info flex-col justify-center text-center bg-slate-900 text-white" >
        <div className=""><img src={dp} alt ="profile" className="dp object-cover h-56 m-2 ml-20 rounded-lg"/></div>
       
      <div className="name font-semibold">
        
      Kislay Raj
      </div>
      <div className="job text-xs text-sky-200 mt-1">Web Developer</div>
      <div className="buttons m-2 ">
        <button className=" mr-4 border-2 border-transparent pl-2 pr-2 rounded-sm text-black bg-white text-sm"><i class="fa-solid fa-envelope text-sm pr-2"></i>Email</button>
        <button className="ml-4 border-2 border-transparent pl-2 pr-2 rounded-sm text-white bg-blue-800 text-sm"><i class="fa-brands fa-linkedin text-sm pr-2"></i>LinkedIn</button>
      </div>
      </header>
    </div>
  );
};

export default Header;
