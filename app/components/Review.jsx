'use client'
import React from 'react'
import CommonHead from './common/CommonHead'
import { FaStarHalfAlt } from "react-icons/fa";
import Slider from 'react-slick';
import SingleReview from './common/SingleReview';

const Review = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <section className='pb-[70px]'>
         <div className="container">
            <CommonHead title={'OUR HAPPY CUSTOMERS'} />
            <div className="row mt-[40px]">

                <Slider {...settings}>
                   <div>
                     <SingleReview />
                   </div>

                   <div>
                     <SingleReview />
                   </div>

                   <div>
                     <SingleReview />
                   </div>

                   <div>
                     <SingleReview />
                   </div>

                   <div>
                     <SingleReview />
                   </div>


                    
                </Slider>
            </div>
         </div>
      </section>
    </>
  )
}

export default Review