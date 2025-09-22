import ProDetails from '@/app/components/common/ProDetails'
import SliderImg from '@/app/components/common/SliderImg'
import TopSelling from '@/app/components/TopSelling'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='pb-[80px]'>
         <div className="container">
             <div className="row flex justify-between">

                <div className="ImgSlide w-[610px]">
                    <SliderImg />
                </div>

                <div className='w-[600px]'>
                    <ProDetails />
                </div>

             </div>

             <div>
                <TopSelling />
             </div>
         </div>
      </section>
    </>
  )
}

export default page