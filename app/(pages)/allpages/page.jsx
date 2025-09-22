import FilterSidebar from '@/app/components/common/FilterSidebar'
import ViewAllRightSide from '@/app/components/common/ViewAllRightSide'
import React from 'react'

const Page = () => {
  return (
    <>
      <section className='pt-[48px] pb-[80px]'>
         <div className="container">
            <div className="row flex gap-[90px] ">

                <div className='w-[295px] h-fit border border-[#b2afaf] rounded-[20px] py-[20px] px-[24px]'>
                    <FilterSidebar />
                </div>

                <div className=' w-[980px]'>
                    <ViewAllRightSide />
                </div>

            </div>
         </div>
      </section>
    </>
  )
}

export default Page