import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ title, url, sub, id }) => {
  const router = useRouter();
  const [drop, setDrop] = useState(false);
  const [base, setBase] = useState(0);
  return (
    <div
      onClick={(e) => {
        setDrop(!drop);
      }}
    >
      <div className='flex items-center'>
        <h1
          className='uppercase my-4 font-bold text-sm cursor-pointer select-none py-2 border-white hover:text-[#FF0000] border-b-2 hover:border-[#FF0000] transition'
          onClick={() => router.push(url)}
        >
          {title}
        </h1>{" "}
        {sub && (
          <i className='text-xl'>
            {!drop ? <MdArrowDropDown /> : <IoMdArrowDropright />}
          </i>
        )}
      </div>
      {sub && (
        <div
          className={`${
            drop ? "block" : "hidden"
          } md:absolute z-10 top-24 border-t-4 border-[#FF0000] bg-white p-4 px-8 rounded-md shadow-md`}
        >
          {sub?.map(({ title, url }, i) => {
            return (
              <Link  key={i} href={url}>
                <h1
                 
                  className='hover:text-[#FF0000] transition uppercase my-4 font-bold text-sm cursor-pointer'
                >
                  {title}
                </h1>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavItem;
