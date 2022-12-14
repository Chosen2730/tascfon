import { useState, useEffect } from "react";
import hash from "../images/hash.png";
import bank from "../images/bank.png";
import Image from "next/image";
import Layout from "../Layout/layout";
import { giveHeading, banks } from "../utils/bank";
import style from "../styles/hero.module.css";
import { TbBuildingSkyscraper, TbHeartHandshake } from "react-icons/tb";
import { RiHandHeartLine } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import Button from "../components/button";

const Give = () => {
  const [base, setBase] = useState(0);
  const [acc, setAcc] = useState("0050905273");
  const [transfer, setTransfer] = useState();
  const [drop, setDrop] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const selectedAcc = banks.find((bank) => bank.bankName === selectedBank);
  const [amount, setAmount] = useState(0);
  const [copy, setCopy] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopy(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [copy]);

  const USSDCODE = selectedAcc && selectedAcc.ussd;
  const ussd = `${USSDCODE}${amount}*${acc}#`;
  return (
    <Layout>
      <div className='max-w-[1440px] mx-auto text-gray-800'>
        <div
          className={`${style.giveHeader} min-h-[400px] flex flex-col justify-center items-center`}
        >
          <h1 className='text-5xl md:text-7xl font-bold uppercase text-white text-center w-full h-full m-0'>
            Give
          </h1>
        </div>
        <div className='max-w-3xl mx-auto p-4 -mt-28 sm:-mt-44 '>
          <div className='p-4 sm:p-8 rounded-md shadow-xl my-8 bg-white'>
            <h1 className='capitalize font-semibold text-lg my-3'>
              What will you like to give towards?
            </h1>
            <div className='grid grid-cols-3 justify-center gap-4 items-center'>
              {giveHeading.map(({ title }, i) => {
                return (
                  <div
                    key={i}
                    className={`${
                      i === base ? "bg-[#03AF09] text-[#fff]" : "text-[#03AF09]"
                    } rounded-xl shadow-md  flex flex-col justify-center items-center gap-3 w-full p-3 sm:p-8 cursor-pointer md:hover:bg-green-200`}
                    onClick={() => {
                      setBase(i);
                      if (i === 2) {
                        setAcc("0143829523");
                      } else {
                        setAcc("0050905273");
                      }
                    }}
                  >
                    <i className='text-3xl'>
                      {i === 0 ? (
                        <TbHeartHandshake />
                      ) : i === 1 ? (
                        <RiHandHeartLine />
                      ) : (
                        <TbBuildingSkyscraper />
                      )}
                    </i>
                    <h3 className='uppercase text-xs font-semibold '>
                      {title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='p-4 sm:p-8 rounded-md shadow-xl my-8'>
            <h1 className='capitalize font-semibold text-lg'>
              How much would you like to give?
            </h1>
            <div className='flex justify-center'>
              <input
                type='number'
                className='text-3xl font-bold mx-auto text-center w-full p-3 border-b-2 border-gray-300'
                placeholder='0.00'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div className='p-4 sm:p-8 rounded-md shadow-xl my-8'>
            <h1 className='capitalize font-semibold text-lg'>
              Select a payment method
            </h1>
            <div
              className='flex items-center space-x-4 border-2 border-gray-200 p-4 rounded-md my-3  cursor-pointer hover:bg-green-200'
              onClick={() => {
                setDrop(true);
                setTransfer(true);
              }}
            >
              <Image src={bank} alt='bank' width={23} height={22} />
              <h2>Bank Transfer</h2>
            </div>
            <div
              className='flex items-center space-x-4 border-2 border-gray-200 p-4 rounded-md my-3 cursor-pointer hover:bg-green-200'
              onClick={() => {
                setDrop(true);
                setTransfer(false);
              }}
            >
              <Image src={hash} alt='bank' width={23} height={22} />
              <h2>USSD</h2>
            </div>

            {drop && transfer && (
              <div className='border-2 border-gray-200 p-4 rounded-md my-3'>
                <h2>GTB</h2>
                <div className='flex justify-between items-center'>
                  <h2 className='font-bold my-2'>{acc}</h2>
                  <div className='text-xs'>
                    <Button
                      text={
                        <i className='flex items-center space-x-2'>
                          <h2 className='capitalize font-bold'>
                            {copy ? "copy" : "copied"}
                          </h2>
                          {!copy && <AiOutlineCheck />}
                        </i>
                      }
                      bgColor='#0F6212'
                      textColor='#fff'
                      action={() => {
                        navigator.clipboard.writeText(acc);
                        setCopy(false);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
            {drop && !transfer && (
              <div className='border-2 border-gray-200 p-4 rounded-md my-3 '>
                <div className='flex justify-between items-center'>
                  <select
                    name=''
                    id=''
                    className='block w-full p-4 border-2 border-grey-200 rounded-md'
                    onChange={(e) => setSelectedBank(e.target.value)}
                  >
                    {banks.map(({ bankName, ussd }, i) => {
                      return (
                        <option key={i} value={bankName}>
                          {bankName}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {selectedBank && (
                  <div className='text-center my-4'>
                    <p className='text-xs'>
                      Copy and paste the USSD Code below into your phone dialer
                      or press the Pay with Code button to dial directly.
                    </p>
                    <h2 className='my-3'>{selectedBank}</h2>
                    <h3 className='font-bold text-lg sm:text-3xl my-4'>
                      {ussd}
                    </h3>
                    <div className='flex justify-between my-3 space-x-4'>
                      <div
                        className={`${
                          copy ? "bg-[#01170E]" : "bg-green-600"
                        } w-full p-4 font-bold text-white text-xs rounded-md cursor-pointer`}
                        onClick={() => {
                          navigator.clipboard.writeText(ussd);
                          setCopy(false);
                        }}
                      >
                        <i className='flex items-center space-x-2 justify-center'>
                          <h2 className='capitalize'>
                            {copy ? "copy code" : "code copied"}
                          </h2>
                          {!copy && <AiOutlineCheck />}
                        </i>
                      </div>
                      <a
                        href={`tel:${ussd}`}
                        className='w-full bg-[#FF0000] p-4 font-bold text-white text-xs rounded-md'
                      >
                        <div>Pay with code</div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Give;
