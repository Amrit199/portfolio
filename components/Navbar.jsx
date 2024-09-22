import React, { useEffect, useState } from "react";
import logo from "../public/assets/logo.jpg";
import { Link } from "react-scroll";
// import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  // const [shadow, setShadow] = useState(false);
  const [shadow, setShadow] = useState(null);
  const handleMenu = () => {
    setMobile(!mobile);
  };
  // useEffect(() => {
  //   const handleShadow = () => {
  //     if (window.scrollY >= 90) {
  //       setShadow(true);
  //     } else {
  //       setShadow(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleShadow);
  // }, []);
  useEffect(() =>{
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const moveY = window.scrollY
      const direction = moveY > lastScrollY ? "down" : "up"
      if (direction !== shadow && (moveY - lastScrollY > 10 || moveY - lastScrollY < -10)) {
        setShadow(direction)
      }
      lastScrollY = moveY > 0 ? moveY : 0
    }
    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.addEventListener("scroll", updateScrollDirection)
    }
  }, [shadow])

  // className={
        //   shadow
        //     ? "w-full shadow-lg shadow-gray-600 h-14 bg-[#ecf0f3] fixed z-[40] p-3 flex items-center justify-between"
        //     : "w-full h-20 bg-[#ecf0f3] fixed z-[40] p-3 flex items-center justify-between"
        // }
  return (
    <div className="w-full">
      <div
        className={`fixed ${shadow === "down" ? "-top-24" : "top-0"} w-full h-20 bg-[#ecf0f3] text-gray-600 py-4 px-4 md:px-14 z-40 flex items-center justify-between transition-all duration-500"`}
      >
        <div className="w-full">
          <Link className=" cursor-pointer flex items-center gap-2" to="/">
            <Image
              src={logo}
              alt="/"
              className="w-14 rounded-full object-fit"
            />
            <h1 className="text-[#1f1f1f]">Amrit Tamang</h1>
          </Link>
        </div>
        {/* Nav link for < 800px screen */}
        <div className="w-full hidden md:flex items-center justify-between gap-3 text-xl">
          <Link
            to="About"
            className="hover:bg-white hover:text-black transition-all delay-150 p-2 rounded-xl cursor-pointer"
          >
            About
          </Link>
          <Link
            to="Skills"
            className="hover:bg-white hover:text-black transition-all delay-150 p-2 rounded-xl cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="Projects"
            className="hover:bg-white hover:text-black transition-all delay-150 p-2 rounded-xl cursor-pointer"
          >
            Projects
          </Link>
          
          <Link
            to="Contact"
            className="hover:bg-white hover:text-black transition-all delay-150 p-2 rounded-xl cursor-pointer"
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
