import Image from 'next/image'
import React from 'react'


const SingleProduct = ({Img,title,price}) => {
  return (
    <>
      <div className='w-[295px]'>
        <div className="IMG bg-gray-400 w-full h-[298px] rounded-[20px]">
            <Image src={Img} alt='product' />
        </div>

        <h2 className='text-[18px] font-medium font-sans mt-[16px]'>{title}</h2>
        <p className='text-[14px] font-normal font-sans my-[8px]'>Rating : <span>4.5/5</span></p>
        <h2 className='text-[18px] font-semibold font-sans'>${price}</h2>


      </div>
    </>
  )
}

export default SingleProduct