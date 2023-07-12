import React, { useEffect, useState } from "react";
import logo from "../public/assets/logo.jpg";
import { Link } from "react-scroll";
// import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleMenu = () => {
    setMobile(!mobile);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div className="w-full">
      <div
        className={
          shadow
            ? "w-full shadow-lg shadow-gray-600 h-14 bg-[#ecf0f3] fixed z-[40] p-3 flex items-center justify-between"
            : "w-full h-20 bg-[#ecf0f3] fixed z-[40] p-3 flex items-center justify-between"
        }
      >
        <div className="w-full">
          <Link className=" cursor-pointer" to="/">
            <Image
              src={logo}
              alt="/"
              className="w-14 rounded-full object-fit"
            />
          </Link>
        </div>
        {/* Nav link for < 800px screen */}
        <div className="w-full hidden md:flex items-center justify-between gap-3 text-xl">
          <Link to="/" className="hover:bg-white p-2 rounded-xl cursor-pointer">
            Home
          </Link>
          <Link
            to="About"
            className="hover:bg-white p-2 rounded-xl cursor-pointer"
          >
            About
          </Link>
          <Link
            to="Skills"
            className="hover:bg-white p-2 rounded-xl cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="Projects"
            className="hover:bg-white p-2 rounded-xl cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="Resume"
            className="hover:bg-white p-2 rounded-xl cursor-pointer"
          >
            Resume
          </Link>
          <Link
            to="Contact"
            className="hover:bg-white p-2 rounded-xl cursor-pointer"
          >
            Contact
          </Link>
        </div>
        {/* mobile menu icon > 800 screen*/}
        <div className="w-full flex justify-end md:hidden">
          {!mobile ? (
            <AiOutlineMenu
              onClick={handleMenu}
              size={40}
              color="black"
              className="cursor-pointer bg-white p-2 rounded-full transition-transform hover:scale-110 active:bg-slate-300"
            />
          ) : (
            <AiOutlineClose
              onClick={handleMenu}
              size={40}
              color="black"
              className="cursor-pointer bg-white p-2 rounded-full transition-transform hover:scale-110 active:bg-slate-300"
            />
          )}
        </div>
      </div>
      {/* mobile menu list */}
      <div
        className={
          !mobile
            ? "fixed top-0 right-[-100%] w-full transition-all ease-in duration-500"
            : " fixed z-30 top-0 right-0 w-full md:hidden bg-white transition-all ease-in duration-500"
        }
      >
        <div>
          <div className="flex flex-col items-center pt-20 pb-4 justify-center gap-3 text-xl">
            <Link
              to="/"
              className="hover:bg-white p-2 rounded-xl cursor-pointer"
              onClick={handleMenu}
            >
              Home
            </Link>
            <Link
              to="About"
              className="hover:bg-white p-2 rounded-xl cursor-pointer"
              onClick={handleMenu}
            >
              About
            </Link>
            <Link
              to="Skills"
              className="hover:bg-white p-2 rounded-xl cursor-pointer"
              onClick={handleMenu}
            >
              Skills
            </Link>
            <Link
              to="Projects"
              className="hover:bg-white p-2 rounded-xl cursor-pointer"
              onClick={handleMenu}
            >
              Projects
            </Link>
            <Link
              to="Resume"
              className="hover:bg-white p-2 rounded-xl cursor-pointer"
              onClick={handleMenu}
            >
              Resume
            </Link>
            <Link
              to="Contact"
              className="hover:bg-white p-2 rounded-xl cursor-pointer"
              onClick={handleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
