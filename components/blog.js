import { posts } from "../utils/posts";
import Image from "next/image";
import Button from "./button";
const Blog = () => {
  return (
    <section className='bg-white text-[#0F6212] text-center p-4 py-16'>
      <h2 className='text-3xl font-bold'>Recent Posts</h2>
      <p className='text-sm text-[#0F6212] capitalize'>
        be energized and strengthened!
      </p>
      <div className='flex justify-center flex-col'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8 my-4 mx-auto'>
          {posts.map(({ image, author, title, content }, i) => {
            return (
              <div
                key={i}
                className='w-[298px] text-left text-gray-800 rounded-md shadow-md p-8'
              >
                <Image src={image} height={155} width={298} alt='photo' />
                <h3 className='text-lg font-bold my-2'>{title}</h3>
                <p className='text-sm'>{content}....</p>
                <h5 className='text-xs text-gray-500 my-4'>{author}</h5>
                <div className='text-xs text-center'>
                  <Button
                    text='See More]]'
                    bgColor='#0F6212'
                    textColor='#fff'
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
