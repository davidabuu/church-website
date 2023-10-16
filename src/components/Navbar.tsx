"use client";
import { MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";


const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" text-white  z-50">
      <div className="flex items-center justify-between">
        <div className="md:hidden ">
          <MenuOutlined
            className="text-white ttt cursor-pointer"
            onClick={showNav}
            style={{
                transform:'translateY(-2px)'
            }}
          />
        </div>
        {/* Desktop Menu */}
        <ul className="hidden nav-list md:flex space-x-4">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>

          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#contacts">CONTACT</a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav ? "flex flex-col" : "hidden"
        } md:hidden absolute nav-list top-full left-0 px-0 right-0 bg-[#AA9055] bg-opacity-70`}
      >
        <li className="p-2 mx-0 text-white border-b-[1px]">Home</li>
        <li className="p-2 text-white border-b-[1px]">
          <a
            onClick={showNav}
            href="#services"
          >
            SERVICES
          </a>
        </li>
        <li className="p-2 text-white border-b-[1px]">
          <a
            onClick={showNav}
            href="#about"
          >
            ABOUT
          </a>
        </li>
        <li className="p-2 text-white border-b-[1px]">
          <a
            onClick={showNav}
            href="#contacts"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
