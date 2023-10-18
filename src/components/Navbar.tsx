"use client";
import { MenuOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [navBarBgColror, setNavBarBgColor] = useState<boolean>(false);

  const showNav = () => {
    setNav(!nav);
  };
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 200) {
      setNavBarBgColor(true);
    } else {
      setNavBarBgColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  }, [changeBackground]);

  return (
    <div
      className={
        navBarBgColror
          ? "fixed top-0 bg-[#aa9055] Handle-Site-Title   left-0 text-white right-0  bg-opacity-80 p-3 z-50"
          : "fixed top-0 left-0 text-white right-0  bg-opacity-80 p-3 z-50"
      }
    >
      <div className="flex items-center justify-between">
        <div className="text-lg lg:text-2xl font-bold">
          Catholic Church of Annunciation Parish, Arab Road Kubwa Abuja
        </div>
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <MenuOutlined
            className="text-white cursor-pointer"
            onClick={showNav}
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
        } md:hidden absolute nav-list top-full left-0 px-0 right-0 bg-[#aa9055] bg-opacity-70 py-2`}
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
