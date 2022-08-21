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
          <h2 className='text-5xl md:text-8xl font-bold max-w-3xl mx-auto'>
            Welcome to the Family of Love.
          </h2>

          <div className='my-3 text-lg capitalize md:text-2xl'>
            <Button text='We Are One' outline='white' />
          </div>
        </div>
        {/* <i className='text-2xl cursor-pointer md:text-4xl'>
          <BsArrowRightCircle />
        </i> */}
      </div>
    </div>
  );
};

export default Hero;
