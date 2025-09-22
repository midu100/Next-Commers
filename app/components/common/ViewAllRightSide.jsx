import React from 'react'
import SingleProduct from './SingleProduct'
import Image from 'next/image'
import all1 from '@/public/all1.png'
import all2 from '@/public/all2.png'
import all3 from '@/public/aall3.png'


const ViewAllRightSide = () => {
  return (
    <>
      <div className=''>
        <h2 className='text-[32px] font-semibold font-mono mb-[16px]'>All Product</h2>

        <div className='flex gap-[40px] flex-wrap'>
            <SingleProduct Img={all1} title={'Gradient Graphic T-shirt'} price={'145'}/>
            <SingleProduct Img={all2} title={'Gradient Graphic T-shirt'} price={'145'}/>
            <SingleProduct Img={all3} title={'Gradient Graphic T-shirt'} price={'145'}/>
            <SingleProduct Img={all1} title={'Gradient Graphic T-shirt'} price={'145'}/>
            <SingleProduct Img={all1} title={'Gradient Graphic T-shirt'} price={'145'}/>
        </div>

      </div>
    </>
  )
}

export default ViewAllRightSide