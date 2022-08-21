import React from "react";
import Layout from "../Layout/layout";
import style from "../styles/hero.module.css";
import { executives, genExecutives } from "../utils/exco";
import Image from "next/image";
import ExecutiveCont from "../components/exco";

const Exco = () => {
  return (
    <Layout>
      <div className='max-w-[1440px] mx-auto'>
        <div
          className={`${style.excoHeader} min-h-[400px] flex flex-col justify-center items-center`}
        >
          <h1 className='text-5xl md:text-7xl font-bold uppercase text-white text-center w-full h-full m-0'>
            The Restorers
          </h1>
        </div>
        <ExecutiveCont arr={executives} category='Central' />
        <div className='mt-20 sm:mt-32'>
          <ExecutiveCont arr={genExecutives} category='general' />
        </div>
      </div>
    </Layout>
  );
};

export default Exco;
