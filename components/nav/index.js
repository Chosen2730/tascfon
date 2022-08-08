import Image from "next/image";
import logo from "../../images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { navtitles } from "../../utils/navItems";

import NavItem from "./navItem";
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className='shadow-md'>
      <div className='mx-auto max-w-6xl flex flex-col md:flex-row justify-between md:items-center py-4 px-4 xl:px-0  text-[#0F6212]'>
        <div className='flex justify-between items-center'>
          <Image src={logo} width={112} height={58} alt='logo' />
          <i
            className='block md:hidden text-3xl'
            onClick={() => setNavOpen(!navOpen)}
          >
            {!navOpen ? <HiMenuAlt3 /> : <CgClose />}
          </i>
        </div>
        <div
          className={`${
            navOpen ? "flex flex-col" : "hidden"
          } md:flex md:flex-row md:space-x-4`}
        >
          {navtitles.map((item, i) => {
            return <NavItem key={i} {...item} id={i} />;
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;