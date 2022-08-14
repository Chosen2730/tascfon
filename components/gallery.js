import { gallery } from "../utils/gallery";
import Image from "next/image";
import Button from "./button";
const Gallery = () => {
  return (
    <section className='bg-white text-[#0F6212] text-center p-4 py-16'>
      <h2 className='text-3xl'>
        Photo<span className='font-bold'> Gallery</span>
      </h2>
      <p className='text-sm text-[#0F6212] capitalize'>
        Our collage of photos and memories from notable Services
      </p>
      <div className='flex justify-center flex-col'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 my-4 mx-auto'>
          {gallery.slice(0, 6).map((item, i) => {
            return (
              <div key={i} className='w-full'>
                <Image src={item} height={244} width={309} alt='photo' />
              </div>
            );
          })}
        </div>
        <div className='text-sm'>
          <Button text='See More]]' bgColor='#0F6212' textColor='#fff' />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
