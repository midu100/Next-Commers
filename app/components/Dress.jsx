import React from 'react'
import CommonHead from './common/CommonHead'
import Image from 'next/image'
import dress1 from '@/public/dress1.png'
import dress2 from '@/public/dress2.png'
import dress3 from '@/public/dress3.png'
import dress4 from '@/public/dress4.png'

const Dress = () => {
  return (
    <>
      <section className='py-[80px]'>
        <div className="container bg-[#F0F0F0] py-[70px] px-[64px] rounded-[40px]">
            <CommonHead title={'BROWSE BY DRESS STYLE'}/>
            <div className="row flex justify-between flex-wrap gap-[20px] mt-[64px]">
                <div className='w-[409px] relative overflow-hidden rounded-[20px]'>
                    <Image src={dress1} alt='img' className='hover:scale-[1.08] duration-[.4s] ' />
                    <h2 className='text-[36px] font-semibold font-mono absolute top-[25px] left-[36px]'>Casual</h2>
                </div>

                <div className='w-[684px] relative overflow-hidden rounded-[20px]'>
                    <Image src={dress2} alt='img' className='hover:scale-[1.08] duration-[.4s] ' />
                    <h2 className='text-[36px] font-semibold font-mono absolute top-[25px] left-[36px]'>Formal</h2>
                </div>

                <div className='w-[684px] relative overflow-hidden rounded-[20px]'>
                    <Image src={dress3} alt='img' className='hover:scale-[1.08] duration-[.4s] ' />
                    <h2 className='text-[36px] font-semibold font-mono absolute top-[25px] left-[36px]'>Party</h2>
                </div>

                <div className='w-[409px] relative overflow-hidden rounded-[20px]'>
                    <Image src={dress4} alt='img' className='hover:scale-[1.08] duration-[.4s] ' />
                    <h2 className='text-[36px] font-semibold font-mono absolute top-[25px] left-[36px]'>Gym</h2>
                </div>

            </div>
        </div>
      </section>
    </>
  )
}

export default Dress