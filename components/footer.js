import React from "react";
import Link from "next/link";
import fb from "../images/fb.png";
import ig from "../images/ig.png";
import wa from "../images/wa.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='bg-[#01170E] text-green-50 pt-20 px-8 text-xs'>
      <div className='grid sm:grid-cols-2 gap-4 justify-center max-w-4xl mx-auto'>
        <div>
          <h2 className='text-[#FF0000] text-sm uppercase my-2 sm:text-xl'>
            Location
          </h2>
          <p className='leading-6'>
            PALMVIEW, CAMP JUNCTION, FUNAaB ALABATA, ABEOKUTA, OGUNSTATE. <br />
            Email: tacsfonfuaab@gmail.com <br /> phone: +234 814 382 6136
          </p>
          <div>
            <h2 className='text-[#FF0000] text-sm uppercase my-2 sm:text-xl'>
              Service Times
            </h2>
            <p className='leading-6'>
              Service Times Sundays at 8:00am <br />
              Wednesdays at 3:00pm
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-[#FF0000] text-sm uppercase my-2 sm:text-xl'>
            Quick Links
          </h2>
          <Link href='#'>Give</Link>
          <Link href='#'>Blog</Link>
          <Link href='#'>Prayer Request</Link>
          <Link href='#'>Testimonies</Link>

          <div className='flex items-center gap-2'>
            <Image
              className='bg-white rounded-full p-2'
              width={38}
              height={38}
              src={fb}
              alt='fb'
            />
            <Image
              className='bg-white rounded-full p-2'
              width={38}
              height={38}
              src={ig}
              alt='ig'
            />
            <Image
              className='rounded-full p-2'
              width={38}
              height={38}
              src={wa}
              alt='wa'
            />
          </div>
        </div>
      </div>
      <p className='text-xs text-center mt-20 p-3'>
        © {new Date().getFullYear()} TACSFON FUNAAB. ALL RIGHTS RESERVE
      </p>
    </footer>
  );
};

export default Footer;
