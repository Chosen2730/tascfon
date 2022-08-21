import React from "react";
import { CgClose } from "react-icons/cg";
import { navtitles } from "../../utils/navItems";
import NavItem from "./navItem";
import Image from "next/image";
import logo from "../../images/logo.png";

const Sidebar = ({ setNavOpen, navOpen }) => {
  return (
    <div
      className={`${
        navOpen ? "translate-x-0" : "translate-x-full"
      } fixed top-0 h-screen md:hidden right-0 bg-white p-4 px-8 w-80 z-10 text-[#0F6212] transition`}
    >
      <div className='flex justify-between items-center'>
        <div className='cursor-pointer' onClick={() => router.push("/")}>
          <Image src={logo} width={112} height={58} alt='logo' />
        </div>
        <i
          className='block md:hidden text-3xl'
          onClick={() => setNavOpen(false)}
        >
          <CgClose />
        </i>
      </div>
      <div className={`flex flex-col md:justify-between w-full`}>
        {navtitles.map((item, i) => {
          return <NavItem key={i} {...item} id={i} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
