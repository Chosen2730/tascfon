import React from "react";
import Layout from "../Layout/layout";
import Testimonial from "../components/testimonial";
import style from "../styles/hero.module.css";
import Button from "../components/button";

const Testimony = () => {
  return (
    <Layout>
      <div className='max-w-[1440px] mx-auto text-gray-800'>
        <div
          className={`${style.giveHeader} min-h-[400px] flex flex-col justify-center items-center`}
        >
          <h1 className='text-5xl md:text-7xl font-bold uppercase text-white text-center w-full h-full m-0'>
            Testimonies
          </h1>
        </div>
        <Testimonial />
        <div className='max-w-4xl mx-auto p-6 rounded-md shadow-xl text-[#03AF09]'>
          <h1 className='text-center capitalize text-xl'>encourage someone</h1>
          <hr className='my-7' />
          <div className='grid md:grid-cols-2 gap-4 justify-center'>
            <div>
              <div className='bg-[#03AF09] text-white p-6'>
                <h1 className='uppercase font-bold text-xl'>Testify</h1>
                <p className='text-sm my-2'>Thank God. Encourage others.</p>
                <p className='text-sm my-2'>
                  There is great power in sharing what God is doing in your
                  life. You can encourage, strengthen and motivate other
                  believers.
                </p>
              </div>
              <div className='p-6'>
                <h1 className='uppercase font-bold text-xl'>
                  {" "}
                  TIPS FOR SHARING
                </h1>
                <p className='text-sm my-2'>- Keep it simple</p>
                <p className='text-sm my-2'>- Be concise yet detailed</p>
                <p className='text-sm my-2'>
                  - Be ready to provide supporting documents if necessary
                </p>
              </div>
            </div>
            <div>
              <h1 className='text-lg capitalize font-bold'>
                share your testimony
              </h1>
              <hr className='w-40 bg-red-500 border-red-500 my-4' />
              <form action='' className='text-sm'>
                <label htmlFor='name' className='block'>
                  Your Name <span className='text-red-500'>*</span>
                </label>
                <input
                  type='name'
                  id='name'
                  className='w-full block border-2 border-[#03AF09] p-3 rounded-md my-2 mb-4'
                />
                <label htmlFor='email' className='block'>
                  Your Email <span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full block border-2 border-[#03AF09] p-3 rounded-md my-2 mb-4'
                />
                <label htmlFor='testimony' className='block'>
                  Testimony Title <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='testimony'
                  className='w-full block border-2 border-[#03AF09] p-3 rounded-md my-2 mb-4'
                />
                <label htmlFor='body' className='block'>
                  Your Testimony <span className='text-red-500'>*</span>
                </label>
                <textarea
                  name=''
                  id='body'
                  cols='30'
                  rows='10'
                  className='w-full block border-2 border-[#03AF09] p-3 rounded-md
                my-2 mb-4'
                />
                <Button text='Send' bgColor='#03AF09' textColor='#fff' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimony;
