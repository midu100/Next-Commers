'use client'
import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";

const Subscribe = () => {
  return (
    <>
    <section className='pb-[10px]'>
      <div className="container">

      <div className='bg-[#000] py-[36px] px-[64px] rounded-[20px] flex justify-between items-center'>
         <div className='w-[551px]'>
            <h1 className='text-[40px] font-mono font-bold text-[#fff] leading-[45px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
         </div>

         <div className='w-[350px]'>
            <div className='py-[12px] px-[16px] bg-[#fff] rounded-[62px] flex items-center gap-[12px]'>
                <IoMailOpenOutline className='text-[28px] text-[#706767]'/>
                <input type='email' placeholder='Enter your email address' className='w-full border-0 outline-0 text-[#4b4949] font-mono' />
            </div>

            <button className='bg-[#fff] w-full h-[48px] rounded-[62px] cursor-pointer mt-[14px] font-mono font-medium text-[18px]'>Subscribe to Newsletter</button>
         </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Subscribe