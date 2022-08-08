import React from "react";
import Button from "./button";
import style from "../styles/hero.module.css";
const MidSection = () => {
  return (
    <div className={`${style.midSection} text-white p-2 py-16`}>
      <h2 className='text-center font-bold text-3xl sm:text-5xl my-3 capitalize'>
        We boast in Christ Jesus!
      </h2>
      <div className='flex w-fit mx-auto flex-col sm:flex-row gap-4 justify-center font-bold'>
        <Button outline='white' text='Course Materials?' />
        <Button outline='white' text='New here?' />
        <Button outline='white' text='Prayer Request?' />
      </div>
    </div>
  );
};

export default MidSection;
