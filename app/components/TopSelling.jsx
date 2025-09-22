'use client'
import React from 'react'
import CommonHead from './common/CommonHead'
import new1 from '@/public/top1.png'
import new2 from '@/public/top2.png'
import new3 from '@/public/top3.png'
import new4 from '@/public/top4.png'
import Slider from 'react-slick'
import SingleProduct from './common/SingleProduct'
import Link from 'next/link'

const TopSelling = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <section className='pt-[64px] pb-[80px]'>
        <div className="container">
            <CommonHead title={'TOP SELLING'}/>
            <div className="row mt-[55px]">

                 <Slider {...settings}>
                    <div>
                        <SingleProduct Img={new1} title={'VERTICAL STRIPED SHIRT'} price={'120'}/>
                    </div>
                
                    <div>
                        <SingleProduct Img={new2} title={'COURAGE GRAPHIC T-SHIRT'} price={'220'}/>
                    </div>
                
                    <div>
                        <SingleProduct Img={new3} title={'LOOSE FIT BERMUDA SHORTS'} price={'180'}/>
                    </div>
                
                    <div>
                        <SingleProduct Img={new4} title={'FADED SKINNY JEANS'} price={'130'}/>
                    </div>

                    <div>
                        <SingleProduct Img={new1} title={'VERTICAL STRIPED SHIRT'} price={'120'}/>
                    </div>
                </Slider>

                {/* view all */}

                <div className='mt-[36px] flex justify-center'>
                    <Link href={'/'} className='py-[15px] px-[80px] rounded-[62px] border text-[16px] font-mono'>View All</Link>
                </div>

            </div>
        </div>
      </section>
    </>
  )
}

export default TopSelling