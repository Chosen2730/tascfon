import { useState } from "react";
import { events } from "../utils/upcoming";
import Image from "next/image";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
const Upcoming = () => {
  const [value, setValue] = useState(0);
  const checkValue = (n) => {
    if (n > events.length - 1) {
      return 0;
    } else if (n < 0) {
      return events.length - 1;
    }
    return n;
  };
  const next = () => {
    setValue(checkValue(value + 1));
  };
  const prev = () => {
    setValue(checkValue(value - 1));
  };
  const image1 = events[value];
  const image2 = events[value + 1];
  const image3 = events[value + 2];

  return (
    <section className='bg-[#01170E] text-white text-center p-4 py-16'>
      <h2 className='text-3xl'>
        Here is What's <span className='font-bold'>Happening</span>
      </h2>
      <p className='text-sm text-green-200 capitalize'>
        stay up to date with our programs & events
      </p>
      <div className='flex justify-between space-x-4 items-center'>
        <i
          className='bg-[#FF0000] border-2 border-white rounded-full txt-2xl md:text-4xl cursor-pointer'
          onClick={prev}
        >
          <BsArrowLeftCircle />
        </i>
        <div className='flex gap-4 my-4'>
          {image1 && (
            <Image src={image1} height={400} width={400} alt='event-img' />
          )}
          {image2 && (
            <Image src={image2} height={400} width={400} alt='event-img' />
          )}
          {image3 && (
            <Image src={image3} height={400} width={400} alt='event-img' />
          )}
        </div>
        <i
          className='bg-[#FF0000] border-2 border-white rounded-full txt-2xl md:text-4xl cursor-pointer'
          onClick={next}
        >
          <BsArrowRightCircle />
        </i>
      </div>
    </section>
  );
};

export default Upcoming;
