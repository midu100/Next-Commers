
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CountUp } from 'use-count-up'
import Counter from './common/Counter'

const Banner = () => {
  return (
    <>
       <section style={{background:"url('/BannerBg.png')"}} className='pt-[103px] pb-[91px] bg-no-repeat bg-cover bg-center'>
         <div className="container">
             <div className="row">
                <div>
                    <h1 className='w-[577px] text-[64px] font-mono font-bold leading-[64px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className='w-[577px] text-[16px] font-sans font-normal text-[#555151] mt-[32px] mb-[41px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Link href={'/'} className='py-[15px] px-[68px] rounded-[62px] bg-[#000] text-[16px] text-[#fff] font-medium font-mono'>Shop Now</Link>

                    <div className='w-[596px] flex justify-between items-center mt-[48px]'>
                        <Counter Num={200} Des={'International Brands'} />
                        <Counter Num={2000} Des={'High-Quality Products'} />
                        <Counter Num={30000} Des={'Happy Customers'} />
                    </div>
                </div>
             </div>
         </div>
       </section>
    </>
  )
}

export default Banner