import React, { useEffect, useState } from "react";
import logo from "../public/assets/logo.jpg";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [shadow, setShadow] = useState(false)
  const handleMenu = () => {
    setMobile(!mobile);
  };
  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])
  return (
    <div className="w-full">
      <div className={shadow ? "w-full shadow-lg shadow-gray-600 h-20 bg-[#ecf0f3] fixed z-[40] p-3 flex items-center justify-between" : "w-full h-20 bg-[#ecf0f3] fixed z-[40] p-3 flex items-center justify-between"}>
        <div className="w-full">
          <Link href="/">
            <Image src={logo} alt="/" className="w-16 rounded-full object-fit" />
          </Link>
        </div>
        {/* Nav link for < 800px screen */}
        <div className="w-full hidden md:flex items-center justify-between gap-3 text-xl">
          <Link href="/" className="hover:bg-white p-2 rounded-xl">
            Home
          </Link>
          <Link href="/#about" className="hover:bg-white p-2 rounded-xl">
            About
          </Link>
          <Link href="/#skills" className="hover:bg-white p-2 rounded-xl">
            Skills
          </Link>
          <Link href="/#projects" className="hover:bg-white p-2 rounded-xl">
            Projects
          </Link>
          <Link href="/Resume" className="hover:bg-white p-2 rounded-xl">
            Resume
          </Link>
          <Link href="/#contact" className="hover:bg-white p-2 rounded-xl">
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
          <div className="flex flex-col items-center pt-20 justify-center gap-3 text-xl">
            <Link href="/" className="hover:bg-white p-2 rounded-xl" onClick={handleMenu}>
              Home
            </Link>
            <Link href="/#about" className="hover:bg-white p-2 rounded-xl" onClick={handleMenu}>
              About
            </Link>
            <Link href="/#skills" className="hover:bg-white p-2 rounded-xl" onClick={handleMenu}>
              Skills
            </Link>
            <Link href="/#projects" className="hover:bg-white p-2 rounded-xl" onClick={handleMenu}>
              Projects
            </Link>
            <Link href="/Resume" className="hover:bg-white p-2 rounded-xl" onClick={handleMenu}>
              Resume
            </Link>
            <Link href="/#contact" className="hover:bg-white p-2 rounded-xl" onClick={handleMenu}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
