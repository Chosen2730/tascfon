import React from "react";

const ExecutiveCont = ({ arr, category }) => {
  return (
    <div className='w-[90%] max-w-7xl -mt-20 sm:-mt-32 bg-white mx-auto p-6 rounded-md shadow-xl text-[#03AF09]'>
      <h1 className='text-center capitalize text-xl tracking-[9px]'>
        Meet our <span className='font-bold'> {category} executives</span>
      </h1>
      <hr className='my-7' />
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center'>
        {arr.map(({ image, tel, name, position }, i) => {
          return (
            <div
              key={i}
              className='flex flex-col items-center justify-center shadow-md p-4 text-center'
            >
              <img
                src={image || "exco/unknown.jpg"}
                className='w-[150px] h-[150px] rounded-full object-cover shadow-md'
                alt='exco'
              />
              <h2 className='mt-2 uppercase font-bold text-lg'>{name}</h2>
              <h2 className='text-sm capitalize italic text-center'>
                - {position} -
              </h2>
              <h2 className='text-sm'>{tel}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExecutiveCont;
