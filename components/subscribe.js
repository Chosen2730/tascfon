import React from "react";
import Button from "./button";

const Subscribe = () => {
  return (
    <div className='p-2 py-16 bg-gray-200'>
      <h2 className='text-3xl md:text-4xl text-[#0F6212] font-bold uppercase text-center'>
        Join our mailing list
      </h2>
      <p className='text-sm text-[#0F6212] text-center my-2'>
        We promise not to SPAM you, but send you edifying and amazing content
        regularly from Tacsfon Funaab
      </p>
      <div className='flex flex-col md:flex-row my-2 justify-center items-center gap-4 w-72 md:w-full md:max-w-4xl mx-auto'>
        <input
          type='name'
          placeholder='Name'
          className='w-full p-4 rounded-2xl'
        />
        <input
          type='email'
          placeholder='Email Address'
          className='w-full p-4 rounded-2xl'
        />
        <input
          type='text'
          placeholder='Birthday, e.g 25th'
          className='w-full p-4 rounded-2xl'
        />
        <div className='text-left'>
          <Button text='SUBSCRIBE' bgColor='#0F6212' textColor='#fff' />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
