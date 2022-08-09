import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { testimonies } from "../utils/testimonies";

const Testimonial = () => {
  const [value, setValue] = useState(0);
  const last = testimonies[value - 1] || testimonies[testimonies.length - 1];
  const first = testimonies[value];
  const second = testimonies[value + 1] || testimonies[value];
  const changeIndex = (id) => {
    setValue(id);
  };
  return (
    <div className='text-[#0F6212] p-4 py-12'>
      <h2 className='text-3xl md:text-4xl font-bold uppercase text-center'>
        Testimonies
      </h2>
      <p className='text-sm text-[#0F6212] capitalize text-center'>
        See what people are saying.
      </p>
      <div className='grid gap-4 m-8 md:grid-cols-3 md:mt-20'>
        <div className='p-8 pb-12 hidden md:flex flex-col justify-center items-center shadow-xl rounded-xl relative'>
          <i className='text-center'>
            <ImQuotesLeft />
          </i>
          <p className='text-xs my-3'>{last.content}</p>

          <p className='font-bold text-sm mt-2 uppercase'>{last.name}</p>
          <p className='uppercase text-xs'>{last.unit} unit</p>
          <i>{/* <ImQuotesRight /> */}</i>
          <div className='absolute -bottom-14 rounded-full'>
            <img
              className='rounded-full h-[94px] w-[94px]'
              src={last.image}
              alt='image'
            />
          </div>
        </div>
        <div className='p-8 pb-12 flex flex-col justify-center items-center shadow-xl rounded-xl relative md:-translate-y-14 bg-[#0F6212] text-white'>
          <i className='text-center'>
            <ImQuotesLeft />
          </i>
          <p className='text-xs my-3'>{first.content}</p>

          <p className='font-bold text-sm mt-2 uppercase'>{first.name}</p>
          <p className='uppercase text-xs'>{first.unit} unit</p>
          <i>{/* <ImQuotesRight /> */}</i>
          <div className='absolute -bottom-14'>
            <img
              className='rounded-full h-[94px] w-[94px]'
              src={first.image}
              alt='image'
            />
          </div>
        </div>
        <div className='p-8 pb-12 hidden md:flex flex-col justify-center items-center shadow-xl rounded-xl relative'>
          <i className='text-center'>
            <ImQuotesLeft />
          </i>
          <p className='text-xs my-3'>{second.content}</p>

          <p className='font-bold text-sm mt-2 uppercase'> {second.name}</p>
          <p className='uppercase text-xs'>{second.unit} unit</p>
          <i>{/* <ImQuotesRight /> */}</i>
          <div className='absolute -bottom-14'>
            <img
              className='rounded-full h-[94px] w-[94px]'
              src={second.image}
              alt='image'
            />
          </div>
        </div>
      </div>
      <div className='flex space-x-3 justify-center my-4 mt-20'>
        {testimonies.map((item, i) => {
          return (
            <div
              className={`${
                i === value ? "bg-green-600" : "bg-white"
              } w-4 h-4 text-5xl bg-[#fff] cursor-pointer rounded-full border-2 border-green-600`}
              key={i}
              onClick={() => changeIndex(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
