import { useState, useEffect } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { testimonies } from "../utils/testimonies";

const Testimonial = () => {
  const [value, setValue] = useState(0);
  const changeIndex = (id) => {
    setValue(id);
  };
  const end = value + 3;
  const checkValue = (n, arr) => {
    if (n > arr.length - 1) {
      return 0;
    }
    if (n === arr.length - 2) {
      return 0;
    } else if (n < 0) {
      return arr.length - 2;
    }
    return n;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = value + 1;
      setValue(checkValue(newValue, testimonies));
    }, 5000);

    return () => clearInterval(interval);
  }, [value]);
  return (
    <div className='text-[#0F6212] p-4 py-12'>
      <h2 className='text-3xl md:text-4xl font-bold uppercase text-center'>
        Reviews
      </h2>
      <p className='text-sm text-[#0F6212] capitalize text-center'>
        See what people say about us.
      </p>
      <div className='grid gap-4 m-8 md:grid-cols-3 md:mt-20'>
        {testimonies
          .slice(value, end)
          .map(({ content, name, unit, image }, i) => {
            return (
              <div
                key={i}
                className={`${
                  i === 1
                    ? "md:-translate-y-14 bg-[#0F6212] text-white flex"
                    : "hidden"
                } p-8 pb-12 md:flex flex-col justify-center items-center shadow-xl rounded-xl relative`}
              >
                <i className='text-center'>
                  <ImQuotesLeft />
                </i>
                <p className='text-xs my-3'>{content}</p>

                <p className='font-bold text-sm mt-2 uppercase'>{name}</p>
                <p className='uppercase text-xs'>{unit} unit</p>

                <div className='absolute -bottom-14 rounded-full'>
                  <img
                    className='rounded-full h-[94px] w-[94px] object-cover'
                    src={image}
                    alt='image'
                  />
                </div>
              </div>
            );
          })}
      </div>
      <div className='flex space-x-3 justify-center my-4 mt-20'>
        <h2
          className='text-green-600 cursor-pointer text-sm'
          onClick={() => setValue(checkValue(value - 1, testimonies))}
        >
          prev
        </h2>
        {testimonies.slice(0, 5).map((item, i) => {
          return (
            <div
              className={`${
                i === value ? "bg-green-600" : "bg-white"
              } w-4 h-4 text-5xl cursor-pointer rounded-full border-2 border-green-600`}
              key={i}
              onClick={() => {
                changeIndex(i), setValue(i);
              }}
            />
          );
        })}
        <h2
          className='text-green-600 cursor-pointer text-sm'
          onClick={() => setValue(checkValue(value + 1, testimonies))}
        >
          next
        </h2>
      </div>
    </div>
  );
};

export default Testimonial;
