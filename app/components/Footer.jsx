'use client'

import Image from 'next/image'
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from 'next/link';
import Subscribe from './Subscribe';




const Footer = () => {
    const Icons = [
        {
            icon:<FaFacebookF />
        },
        {
            icon:<FaTwitter />
        },
        {
            icon:<FaInstagram />
        },
        {
            icon:<FaGithub />
        }
    ]


  return (
    <>
      <footer className='bg-[#F0F0F0] pt-[140px] pb-[88px] '>
         <div className="container relative">

            {/* <div className='absolute top-[-240px] w-full'>
                <Subscribe />
            </div> */}

            <div className="row flex justify-between items-center">

                <div>
                    <div className="IMG">
                        <Image src='/Logo.png' alt='logo' width={167} height={23}/>
                    </div>
                    <p className='mt-[25px] text-[14px] font-sans font-normal text-[#625a5a] w-[248px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

                    <div className='flex gap-[12px] mt-[35px]'>
                        {
                            Icons.map((item,i)=>(
                                <div key={i} className='w-[40] h-[40] rounded-full bg-[#fff] flex justify-center items-center hover:bg-[#000] hover:text-[#fff] duration-[.4s]'>
                                <Link href={'/'}>{item.icon}</Link>
                            </div>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <h2 className='text-[19px] font-semibold font-mono text-[#000] mb-[26px]'>Company</h2>
                    <div className='flex flex-col gap-[10px] font-mono'>
                        <Link href={'/'} className='text-[#625a5a]'>About</Link>
                        <Link href={'/'} className='text-[#625a5a]'>Features</Link>
                        <Link href={'/'} className='text-[#625a5a]'>Works</Link>
                        <Link href={'/'} className='text-[#625a5a]'>Career</Link>
                    </div>
                </div>

                <div>
                    <h2 className='text-[19px] font-semibold font-mono text-[#000] mb-[26px]'>Help</h2>
                    <div className='flex flex-col gap-[10px] font-mono'>
                        <Link href={'/'} className='text-[#625a5a]'>Customer Support</Link>
                        <Link href={'/'} className='text-[#625a5a]'>Delivery Details</Link>
                        <Link href={'/'} className='text-[#625a5a]'>Terms & Conditions</Link>
                        <Link href={'/'} className='text-[#625a5a]'>Privacy Policy</Link>
                    </div>
                </div>

                <div>
                    <h2 className='text-[19px] font-semibold font-mono text-[#000] mb-[26px]'>FAQ</h2>
                    <div className='flex flex-col gap-[10px] font-mono'>
                        <Link href={'/'} className='text-[#625a5a]'>Account</Link>
                        <Link href={'/'} className='text-[#625a5a]'>Manage Deliveries</Link>
                        <Link href={'/'} className='text-[#625a5a]'>Orders</Link>
                        <Link href={'/'} className='text-[#625a5a]'>Payments</Link>
                    </div>
                </div>

                <div>
                    <h2 className='text-[19px] font-semibold font-mono text-[#000] mb-[26px]'>Resources</h2>
                    <div className='flex flex-col gap-[10px] font-mono'>
                        <Link href={'/'} className='text-[#625a5a]'>Free eBooks</Link>
                        <Link href={'/'} className='text-[#625a5a]'>Development Tutorial</Link>
                        <Link href={'/'} className='text-[#625a5a]'>How to - Blog</Link>
                        <Link href={'/'} className='text-[#625a5a]'>Youtube Playlist</Link>
                    </div>
                </div>

            </div>

            <div className="lastRow flex justify-between items-center">
                <p className='text-[15px] font-mono font-normal text-[#625a5a] mt-[25px]'>Shop.co © 2000-2023, All Rights Reserved</p>
                <div className='flex gap-[12px] items-center'>
                    <button className='cursor-pointer'><Image src='/card1.png' width={57} height={40} alt='card' /></button>
                    <button className='cursor-pointer'><Image src='/card2.png' width={57} height={40} alt='card' /></button>
                    <button className='cursor-pointer'><Image src='/card3.png' width={57} height={40} alt='card' /></button>
                    <button className='cursor-pointer'><Image src='/card4.png' width={57} height={40} alt='card' /></button>
                    <button className='cursor-pointer'><Image src='/card5.png' width={57} height={40} alt='card' /></button>
                </div>
            </div>
         </div>
      </footer>
    </>
  )
}

export default Footer