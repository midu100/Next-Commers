'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className='py-[24px]'>
         <div className="container">
            <div className="row flex justify-between items-center">

                <div className="Logo">
                    <Image src='/Logo.png' alt='Logo' width={160} height={22}/>
                </div>

                <ul className='flex gap-[24px] items-center text-[16px] font-mono font-normal text-[#000]'>
                    <li><Link href={'/'}>Shop</Link></li>
                    <li><Link href={'/'}>On Sale</Link></li>
                    <li><Link href={'/'}>New Arrivals</Link></li>
                    <li><Link href={'/'}>Brands</Link></li>
                </ul>

                <div className='w-[577px] h-[48px] bg-[#F0F0F0] rounded-[62px] flex gap-[12px] items-center px-[16px]'>
                    <CiSearch className='text-[24px] font-bold'/>
                    <input type='text' placeholder='Search for products...' className='text-[16px] font-mono font-normal w-[90%] border-0 outline-0' />
                </div>

                <div className="ICONS flex gap-[14px] items-center">
                    <Link href={'/'}><BiCart className='text-[30px]'/></Link>
                    <Link href={'/signup'}><FaRegCircleUser className='text-[24px]'/></Link>
                </div>

            </div>
         </div>
      </nav>
    </>
  )
}

export default Navbar