import {
  MenuOutlined,
  PlusSquareFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [navBarBgColor, setNavBarBgColor] = useState<boolean>(false);
  const [subNav, setSubNav] = useState<boolean>(false);
  const [piousSocietiesNav, setPiousSocietiesNav] = useState<boolean>(false);

  const showNav = () => {
    setNav(!nav);
  };

  const otherNav = () => {
    setSubNav(!subNav);
  };

  const togglePiousSocieties = () => {
    setPiousSocietiesNav(!piousSocietiesNav);
  };

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavBarBgColor(true);
    } else {
      setNavBarBgColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      className={
        navBarBgColor
          ? "fixed top-0 bg-[#aa9055] Handle-Site-Title   left-0 text-white right-0 bg-opacity-80 p-3 z-50"
          : "fixed top-0 left-0 text-white right-0 bg-opacity-80 p-3 z-50"
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
          <li className="hover:text-[#AA9055]">
            <a href="#home">HOME</a>
          </li>
          <li className="hover:text-[#AA9055]">
            <a href="#about">ABOUT</a>
          </li>
          <li className="relative group hover:text-[#AA9055]">
            <a href="#services">TEAM</a>
            <ul className="hidden absolute right-[-70px] top-full w-44 bg-[#aa9055] bg-opacity-70 py-2 text-white group-hover:block space-y-2">
              <li>
                <a href="#pastoral-team hover:text-[#AA9055]">Pastoral Team</a>
              </li>
              <li>
                <a href="#pious-societies hover:text-[#AA9055]">
                  Pious Societies
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#dontations hover:text-[#AA9055]">DONATIONS</a>
          </li>
          <li>
            <a href="#contacts hover:text-[#AA9055]">CONTACT</a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? "flex flex-col transform translate-x-0 transition-transform duration-500 ease-in-out"
            : "transform translate-x-full transition-transform duration-500 ease-in-out"
        } md:hidden absolute nav-list top-full left-0 px-0 right-0 bg-[#aa9055] bg-opacity-70 py-2`}
      >
        <li className="p-2 mx-0 text-white border-b-[1px]">Home</li>
        <li className="p-2 text-white border-b-[1px]">
          <a
            onClick={showNav}
            href="#about"
          >
            ABOUT
          </a>
        </li>
        <li className="relative group p-2 text-white border-b-[1px]">
          <a
            href="#services"
            className="flex items-center"
            onClick={otherNav}
          >
            TEAM <PlusSquareFilled className="mx-2" />{" "}
          </a>
        </li>
        <div className={`${!subNav ? "hidden" : ""}`}>
          <li className="p-2 mx-0 text-white border-b-[1px]">
            <a href="#pastoral-team">Pastoral Team</a>
          </li>
          <li className="p-2 mx-0 text-white border-b-[1px]">
            <a
              href="#pious-societies"
              className="flex items-center"
              onClick={togglePiousSocieties}
            >
              Pious Societies <PlusCircleFilled className="mx-2" />
            </a>
          </li>
          <div className={`${!piousSocietiesNav ? "hidden" : ""}`}>
            <li className="p-2 mx-0 text-white border-b-[1px]">
              <a href="#pious-societies-detail-1">Society 1</a>
            </li>
            <li className="p-2 mx-0 text-white border-b-[1px]">
              <a href="#pious-societies-detail-2">Society 2</a>
            </li>
            {/* Add more Pious Societies as needed */}
          </div>
        </div>
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
