import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const NavItem = ({ title, sub, id }) => {
  const [drop, setDrop] = useState(false);
  const [base, setBase] = useState(0);
  return (
    <div
      onClick={(e) => {
        setDrop(!drop);
      }}
    >
      <div className='flex items-center'>
        <h1 className='uppercase my-4 font-bold text-sm cursor-pointer select-none py-2 border-white hover:text-[#FF0000] border-b-2 hover:border-[#FF0000] transition'>
          {title}
        </h1>
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
          } md:absolute z-10 top-24 border-t-4 border-[#FF0000] bg-white p-4 rounded-md shadow-md`}
        >
          {sub?.map((item, i) => {
            return (
              <h1
                key={i}
                className='hover:text-[#FF0000] transition uppercase my-4 font-bold text-sm cursor-pointer'
              >
                {item}
              </h1>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavItem;
