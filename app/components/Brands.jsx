'use client'
import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Brands = () => {
    const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <section className='py-[44px] bg-[#000]'>
         <div className="container">
             <div className="row">
                <Slider {...settings}>
                    <div>
                       <Image src='/brand1.png' alt='brands' width={166} height={36} />
                    </div>

                    <div>
                       <Image src='/brand2.png' alt='brands' width={91} height={38} />
                    </div>

                    <div>
                       <Image src='/brand3.png' alt='brands' width={156} height={36} />
                    </div>

                    <div>
                       <Image src='/brand4.png' alt='brands' width={194} height={32} />
                    </div>

                    <div>
                       <Image src='/brand5.png' alt='brands' width={207} height={33} />
                    </div>
                        
               </Slider>
             </div>
         </div>
      </section>
    </>
  )
}

export default Brands