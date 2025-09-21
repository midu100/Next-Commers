'use client'
import React from 'react'
import { CountUp } from 'use-count-up'

const Counter = ({Num,Des}) => {
  return (
    <>
      <div>
        <h2 className='text-[40px] font-mono font-bold text-[#000]'><CountUp isCounting end={Num} duration={3.2} />+</h2>
        <p className='text-[16px] font-sans font-normal text-[#5a5252]'>{Des}</p>
      </div>
    </>
  )
}

export default Counter