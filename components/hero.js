import React from "react";
// import back from "../images/back.png";
// import Image from "next/image";
import Button from "../components/button";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import style from "../styles/hero.module.css";

const Hero = () => {
  return (
    <div
      className={`${style.hero} min-h-[700px] bg-black flex flex-col justify-center items-center`}
    >
      <div className='px-8 text-white text-center'>
        {/* <i className='text-2xl cursor-pointer md:text-4xl'>
          <BsArrowLeftCircle />
        </i> */}
        <div>
          <h2 className='text-5xl md:text-8xl font-bold'>
            Welcome to the <span className='block'> Family of Love.</span>
          </h2>
          <p className='text-xl md:text-3xl my-2'>
            ...let no man despise thy youth, we are one.
          </p>
          {/* <div className='my-3 text-sm md:text-2xl'>
            <Button text='Who We Are' outline='white' />
          </div> */}
        </div>
        {/* <i className='text-2xl cursor-pointer md:text-4xl'>
          <BsArrowRightCircle />
        </i> */}
      </div>
    </div>
  );
};

export default Hero;
