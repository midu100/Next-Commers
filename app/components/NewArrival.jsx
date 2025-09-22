'use client'
import React from 'react'
import CommonHead from './common/CommonHead'
import SingleProduct from './common/SingleProduct'
import new1 from '@/public/new1.png'
import new2 from '@/public/new2.png'
import new3 from '@/public/new3.png'
import new4 from '@/public/new4.png'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'

const NewArrival = () => {
    const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true
  };
  return (
    <>
      <section className='pt-[72px] pb-[64px]'>
        <div className="container">
            <CommonHead title={'NEW ARRIVALS'}/>
            <div className="row mt-[45px]">
                <Slider {...settings}>
                    <div>
                       <SingleProduct Img={new1} title={'T-SHIRT WITH TAPE DETAILS'} price={'120'}/>
                    </div>

                    <div>
                       <SingleProduct Img={new2} title={'SKINNY FIT JEANS'} price={'220'}/>
                    </div>

                    <div>
                       <SingleProduct Img={new3} title={'CHECKERED SHIRT'} price={'180'}/>
                    </div>

                    <div>
                       <SingleProduct Img={new4} title={'SLEEVE STRIPED T-SHIRT'} price={'130'}/>
                    </div>
                </Slider>

                {/* view all page */}

                <div className='mt-[36px] flex justify-center'>
                    <Link href={'/'} className='py-[15px] px-[80px] rounded-[62px] border text-[16px] font-mono'>View All</Link>
                </div>
                
            </div>
        </div>
      </section>
    </>
  )
}

export default NewArrival