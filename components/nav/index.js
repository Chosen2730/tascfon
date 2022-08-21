import Image from "next/image";
import logo from "../../images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

import { useState } from "react";
import { navtitles } from "../../utils/navItems";
import { useRouter } from "next/router";

import NavItem from "./navItem";
import Sidebar from "./sidebar";
const Nav = () => {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className='shadow-md'>
      <div className='mx-auto max-w-6xl flex flex-col md:flex-row md:space-x-40 md:items-center py-4 px-4 xl:px-0  text-[#0F6212]'>
        <div className='flex justify-between items-center'>
          <div
            className={`${
              navOpen ? "opacity-20" : "opacity-full"
            } cursor-pointer transition`}
            onClick={() => router.push("/")}
          >
            <Image src={logo} width={112} height={58} alt='logo' />
          </div>
          <i
            className='block md:hidden text-3xl'
            onClick={() => setNavOpen(true)}
          >
            <HiMenuAlt3 />
          </i>
        </div>
        <div className={`hidden md:flex md:flex-row md:justify-between w-full`}>
          {navtitles.map((item, i) => {
            return <NavItem key={i} {...item} id={i} />;
          })}
        </div>
      </div>
      <Sidebar setNavOpen={setNavOpen} navOpen={navOpen} />
    </nav>
  );
};

export default Nav;
