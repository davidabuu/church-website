import {
  MenuOutlined,
  PlusSquareFilled,
  
  CaretDownFilled,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [navBarBgColor, setNavBarBgColor] = useState<boolean>(false);
  const [subNav, setSubNav] = useState<boolean>(false);
  const [showSubNav, setSubNavigation] = useState<boolean>(false);

  const showNav = () => {
    setNav(!nav);
  };
  const navigation = () => {
    setSubNavigation(!showSubNav);
  };
  const otherNav = () => {
    setSubNav(!subNav);
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
         CCAP
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
          <li
            className={
              navBarBgColor ? "hover:text-blue-200" : "hover:text-[#AA9055]"
            }
          >
            <a href="#home">HOME</a>
          </li>
          <li
            className={
              navBarBgColor ? "hover:text-blue-200" : "hover:text-[#AA9055]"
            }
          >
            <a href="#about">ABOUT</a>
          </li>
          <li className={showSubNav ? "relative group" : ""}>
            <div className="flex items-center">
              <a href="#services">TEAM</a>
              <CaretDownFilled onClick={navigation} />
            </div>
            <ul
              className={`hidden absolute right-[-70px] top-full w-44 bg-[#aa9055] bg-opacity-70 py-2 text-white ${
                navBarBgColor ? " group-hover:bg-[#1e4165b9]" : ""
              } ${showSubNav ? "block group-hover:block" : ""}`}
            >
              <li>
                <a
                  href="/pastoral-team"
                  className="hover:text-blue-700"
                >
                  Pastoral Team
                </a>
              </li>
              <li>
                <a
                  href="/parish-pastoral-members"
                  className="hover:text-blue-700"
                >
                  Parish Pastoral Council
                </a>
              </li>
              <li>
                <a
                  href="/pious-societies"
                  className="hover:text-blue-700"
                >
                  Pious Societies
                </a>
              </li>
            </ul>
          </li>

          <li
            className={
              navBarBgColor ? "hover:text-blue-200" : "hover:text-[#AA9055]"
            }
          >
            <a href="/donations">DONATIONS</a>
          </li>
          <li
            className={
              navBarBgColor ? "hover:text-blue-200" : "hover:text-[#AA9055]"
            }
          >
            <a href="#events">EVENTS</a>
          </li>
          <li
            className={
              navBarBgColor ? "hover:text-blue-200" : "hover:text-[#AA9055]"
            }
          >
            <a href="#contacts">CONTACT</a>
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
            className="hover:text-blue-700"
          >
            ABOUT
          </a>
        </li>
        <li className="p-2 text-white border-b-[1px]">
          <a
            onClick={showNav}
            href="/donations"
            className="hover:text-blue-700"
          >
            DONATIONS
          </a>
        </li>
        <li className="p-2 text-white border-b-[1px]">
          <a
            onClick={showNav}
            href="#events"
            className="hover:text-blue-700"
          >
            EVENTS
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
            <a
              href="/pastoral-team"
              className="hover:text-blue-700"
            >
              Pastoral Team
            </a>
          </li>
          <li className="p-2 mx-0 text-white border-b-[1px]">
            <a
              href="/parish-pastoral-members"
              className="hover:text-blue-700"
              onClick={otherNav}
            >
              Parish Pastorial Council
            </a>
          </li>
          <li className="p-2 mx-0 text-white border-b-[1px]">
            <a
              href="/pious-societies"
              className="flex items-center   hover:text-blue-700"
              onClick={otherNav}
            >
              Pious Societies
            </a>
          </li>
        </div>
        <li className="p-2 text-white border-b-[1px]">
          <a
            onClick={showNav}
            href="#contacts"
            className="hover:text-blue-700"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
