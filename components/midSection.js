import React from "react";
import Button from "./button";
import style from "../styles/hero.module.css";
import { useRouter } from "next/router";
const MidSection = () => {
  const router = useRouter();
  return (
    <div className={`${style.midSection} text-white p-2 py-16`}>
      <h2 className='text-center font-bold text-3xl sm:text-5xl my-3 capitalize'>
        We boast in Christ Jesus!
      </h2>
      <p className='text-center capitalize italic mb-3'>
        Let no man despise thy youth. 1Tim 4:12
      </p>
      <div className='flex w-fit mx-auto flex-col sm:flex-row gap-4 justify-center font-bold'>
        <Button
          outline='white'
          text='Course Materials'
          action={() =>
            router.push(
              "https://drive.google.com/drive/folders/1XuzEzopVvmNaLI1r5AlSTrkJhQvGOhFp"
            )
          }
        />
        <Button
          outline='white'
          text='The Executives'
          action={() => router.push("/exco")}
        />
        <Button
          outline='white'
          text='Make a Donation'
          action={() => router.push("/give")}
        />
      </div>
    </div>
  );
};

export default MidSection;
