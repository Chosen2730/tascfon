import React from "react";
import Button from "./button";

const Subscribe = () => {
  return (
    <div className='p-2 py-16 bg-gray-200'>
      <h2 className='text-xl md:text-3xl text-[#0F6212] font-bold uppercase text-center'>
        Reach out to us
      </h2>
      <p className='text-sm text-[#0F6212] text-center my-2 px-4 max-w-4xl mx-auto capitalize'>
        We are always available to listen to you, pray with you and rejoice with
        you.
      </p>
      <div className='my-2 w-72 md:w-full md:max-w-4xl mx-auto text-sm'>
        <div className='md:flex gap-4'>
          <input
            type='name'
            placeholder='Name'
            className='w-full p-4 rounded-2xl my-2'
          />
          <input
            type='text'
            placeholder='Email or Tel'
            className='w-full p-4 rounded-2xl my-2'
          />
        </div>
        <div className='md:flex gap-4'>
          <input
            type='text'
            placeholder='Subject'
            className='w-full p-4 rounded-2xl my-2'
          />
          <select name='' id='' className='w-full p-4 rounded-2xl my-2'>
            <option value=''>Select Category</option>
            <option value=''>Enquiry</option>
            <option value=''>Prayer Request</option>
            <option value=''>Testimony</option>
          </select>
        </div>
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          className='block w-full p-4 rounded-2xl my-2'
          placeholder="What's on your mind?"
        />
        <div className='text-left text-xs font-bold my-2'>
          <Button text='Send' bgColor='#0F6212' textColor='#fff' />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
