import React from 'react'
import { FaStarHalfAlt } from 'react-icons/fa'

const SingleReview = () => {
  return (
    <>
      <div className='w-[400px] border rounded-[20px] py-[28px] px-[32px]'>
      
        <div className='flex gap-[7px] items-center text-yellow-500 mb-[15px]'>
            <FaStarHalfAlt />
            <FaStarHalfAlt />
            <FaStarHalfAlt />
            <FaStarHalfAlt />
            <FaStarHalfAlt />
        </div>
      
        <div>
            <h2 className='text-[20px] font-semibold mb-[17px] font-mono'>Sarah M.</h2>
            <p className='text-[16px] font-normal text-gray-400 mb-[17px] font-sans'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
        </div>
      
      </div>
    </>
  )
}

export default SingleReview