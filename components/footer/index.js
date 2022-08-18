import React from "react";
import Link from "next/link";
import fb from "../../images/fb.png";
import ig from "../../images/ig.png";
import ca from "../../images/ca.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className='bg-[#01170E] text-green-50 pt-20 px-8 text-xs -mt-5'>
      <div className='grid sm:grid-cols-2 gap-4 justify-center max-w-4xl mx-auto'>
        <div>
          <h2 className='text-[#FF0000] text-sm uppercase my-2 sm:text-xl font-bold'>
            Contact us
          </h2>
          <p className='leading-6'>
            PALMVIEW, CAMP JUNCTION, FUNAaB ALABATA, ABEOKUTA, OGUNSTATE. <br />
            Email: tacsfonfunaab@gmail.com <br /> Phone: +234 814 382 6136
          </p>
          <div>
            <h2 className='text-[#FF0000] text-sm uppercase my-2 sm:text-xl font-bold'>
              Service Times
            </h2>
            <p className='leading-6'>
              Service Times Sundays at 8:00am <br />
              Wednesdays at 3:00pm
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-[#FF0000] text-sm uppercase my-2 sm:text-xl font-bold'>
            Quick Links
          </h2>
          <Link href='/give'>Give</Link>
          <Link href='#'>Blog</Link>
          <Link href='#'>Prayer Request</Link>
          <Link href='/testimony'>Testimonies</Link>

          <div className='flex items-center gap-4'>
            <Image
              width={30}
              height={30}
              src={fb}
              alt='fb'
              onClick={() =>
                router.push("https://www.facebook.com/tacsfon.funaab.7")
              }
            />
            <Image
              width={30}
              height={30}
              src={ig}
              alt='ig'
              onClick={() =>
                router.push("https://www.instagram.com/tacsfon_funaab/")
              }
            />
            <Image
              className='rounded-full p-2'
              width={30}
              height={30}
              src={ca}
              alt='wa'
              onClick={() => router.push("tel:+2348140092590")}
            />
          </div>
        </div>
      </div>
      <p className='text-xs text-center mt-20 p-2 py-5'>
        © {new Date().getFullYear()} TACSFON FUNAAB. ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default Footer;
