'use client'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className='bg-[#000] py-[10px]'>
         <div className="container">
            <div className="row">
                <p className='font-mono text-[14px] text-[#fff] text-center'>Sign up and get 20% off to your first order.<Link href={'/'} className='underline'>Sing Up Now</Link></p>
            </div>
         </div>
      </header>
    </>
  )
}

export default Header