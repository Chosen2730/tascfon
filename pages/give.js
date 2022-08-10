import React from "react";
import back from "../images/give.png";
import Image from "next/image";
import Layout from "../Layout/layout";
import { giveHeading } from "../utils/bank";
import style from "../styles/hero.module.css";

const Give = () => {
  return (
    <Layout>
      <div className='max-w-[1440px] mx-auto text-gray-800'>
        <div
          className={`${style.giveHeader} min-h-[400px] flex flex-col justify-center items-center`}
        >
          <h1 className='text-7xl font-bold uppercase text-white text-center w-full h-full m-0'>
            Give
          </h1>
        </div>
        <div className='max-w-3xl mx-auto p-4 -translate-y-28 md:-translate-y-44 '>
          <div className='p-4 sm:p-8 rounded-md shadow-xl my-8 bg-white'>
            <h1 className='capitalize font-semibold text-lg'>
              What will you like to give towards?
            </h1>
            <div className='grid grid-cols-3 justify-center gap-4 items-center'>
              {giveHeading.map(({ title, image }, i) => {
                return (
                  <div
                    key={i}
                    className={`${
                      i === 0 && "bg-[#03AF09] text-[#fff]"
                    } rounded-xl shadow-md text-[#03AF09] flex flex-col justify-center items-center gap-3 w-full p-3 sm:p-8`}
                  >
                    <img src={image} className='w-5 sm:w-8' alt='give' />
                    <h3 className='uppercase text-xs font-semibold '>
                      {title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='p-4 sm:p-8 rounded-md shadow-xl my-8'>
            <h1 className='capitalize font-semibold text-lg'>
              How much would you like to give?
            </h1>
            <div className='flex justify-center'>
              <input
                type='number'
                className='text-3xl font-bold mx-auto text-center w-full p-3 border-b-2 border-gray-300'
                placeholder='0.00'
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Give;
