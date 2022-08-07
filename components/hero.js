import React from "react";
// import back from "../images/back.png";
// import Image from "next/image";
import Button from "../components/button";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import style from "../styles/hero.module.css";

const Hero = () => {
  return (
    <div className={`${style.hero} relative h-[80vh] bg-black`}>
      {/* <Image src={back} layout='responsive' alt='background' /> */}
      <div className='absolute px-8 top-0 w-full h-full flex items-center justify-between text-white text-center'>
        <i className='text-xl cursor-pointer md:text-4xl'>
          <BsArrowLeftCircle />
        </i>
        <div>
          <h2 className='text-3xl md:text-7xl font-bold'>
            Welcome to the <span className='block'> Family of Love</span>
          </h2>
          <p className='text-xl md:text-3xl my-2'>...we are one</p>
          <div className='my-3 text-sm md:text-2xl'>
            <Button text='Who We Are' outline='white' />
          </div>
        </div>
        <i className='text-xl cursor-pointer md:text-4xl'>
          <BsArrowRightCircle />
        </i>
      </div>
    </div>
  );
};

export default Hero;
