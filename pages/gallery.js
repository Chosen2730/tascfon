import { useState } from "react";
import Layout from "../Layout/layout";
import style from "../styles/hero.module.css";
import { gallery } from "../utils/gallery";
import { CgClose } from "react-icons/cg";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const PhotoGallery = () => {
  const [display, setDisplay] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <Layout>
      <div className='max-w-[1440px] mx-auto text-gray-50'>
        <div
          className={`${style.photoHeader} min-h-[400px] flex flex-col justify-center items-center`}
        >
          <h1 className='text-5xl md:text-7xl font-bold uppercase text-white text-center w-full h-full m-0'>
            Photo Gallery
          </h1>
          <p className='text-xl my-2 text-white'>
            Our Collage Of Photos And Memories From Notable Services
          </p>
        </div>

        <div className='w-[90%] max-w-4xl bg-white mx-auto my-10 p-6 rounded-md shadow-xl grid grid-cols-2 md:grid-cols-3 gap-4'>
          {gallery.map((img, i) => {
            return (
              <img
                src={img}
                className='w-full h-full object-cover cursor-pointer'
                key={i}
                alt='image'
                onClick={() => {
                  setDisplay(true);
                  setIndex(i);
                }}
              />
            );
          })}
        </div>
        {display && (
          <div className={style.gallery}>
            <i
              className='text-3xl bg-green-800 rounded-full p-5 absolute top-10 right-10'
              onClick={() => setDisplay(false)}
            >
              <CgClose />
            </i>
            <i
              className='text-5xl p-5 cursor-pointer'
              onClick={() =>
                setIndex(() => {
                  const newIndex = index - 1;
                  if (newIndex < 0) {
                    return gallery.length - 1;
                  }
                  return newIndex;
                })
              }
            >
              <AiFillCaretLeft />
            </i>
            <img src={gallery[index]} alt='' />
            <i
              className='text-5xl p-5 cursor-pointer'
              onClick={() =>
                setIndex(() => {
                  const newIndex = index + 1;
                  if (newIndex > gallery.length - 1) {
                    return 0;
                  }
                  return newIndex;
                })
              }
            >
              <AiFillCaretRight />
            </i>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PhotoGallery;
