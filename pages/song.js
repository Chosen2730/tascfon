import React from "react";
import Layout from "../Layout/layout";
import style from "../styles/hero.module.css";
import Button from "../components/button";

const Song = () => {
  return (
    <Layout>
      <div className='max-w-[1440px] mx-auto text-gray-800'>
        <div
          className={`${style.songHeader} min-h-[400px] flex flex-col justify-center items-center`}
        >
          <h1 className='text-5xl md:text-7xl font-bold uppercase text-white text-center w-full h-full m-0'>
            Sing With us
          </h1>
        </div>
        {/* <Testimonial /> */}
        <div className='w-[90%] max-w-4xl -mt-20 sm:-mt-32 bg-white mx-auto p-6 sm:p-12 rounded-md shadow-xl text-[#03AF09]'>
          <h1 className='text-center capitalize text-xl tracking-[9px] font-bold'>
            Family Song
          </h1>
          <hr className='my-7' />
          <p className='text-lg my-2 leading-10'>
            TACSFON Family, We are one. <br />
            TACSFON FUNAAB, Glorious family. <br />
            A place where true love exist, <br />
            We are taught to Love the Lord, <br />
            taught to read his word <br />
            taught the way to Heaven <br />
            Let no man despise thy Youth <br />
            We are one /x3
          </p>
          <h1 className='text-center capitalize text-xl tracking-[9px] font-bold mt-10'>
            Welcome Song
          </h1>
          <hr className='my-7' />
          <p className='text-lg my-2 leading-10'>
            You are welcome <br /> to the family of Love /2x <br />
            A glorious family, peculiar people <br />
            come on rejoice <br /> as you fellowship with us <br />
            we experience his glory <br /> in TACSFON FUNAAB. <br />
            You are welcome <br /> to the family of Love. <br />
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Song;
