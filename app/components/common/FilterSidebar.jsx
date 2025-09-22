'use client'
import React, { useState } from "react";
import { FaSlidersH } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";

const FilterSidebar = () => {
      const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(200);
  
  const[showSize,setShowSize]=useState(false)
  const[showPrice,setShowPrice]= useState(false)


  return (
    <div className="w-64 bg-white shadow-lg rounded-2xl p-5 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Filters</h2>
        <FaSlidersH className="text-gray-500" />
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-3">
        <button className="flex justify-between items-center text-gray-700 hover:text-black">
          T-shirts <FiChevronRight />
        </button>
        <button className="flex justify-between items-center text-gray-700 hover:text-black">
          Shorts <FiChevronRight />
        </button>
        <button className="flex justify-between items-center text-gray-700 hover:text-black">
          Shirts <FiChevronRight />
        </button>
        <button className="flex justify-between items-center text-gray-700 hover:text-black">
          Hoodie <FiChevronRight />
        </button>
        <button className="flex justify-between items-center text-gray-700 hover:text-black">
          Jeans <FiChevronRight />
        </button>
      </div>

      {/* Price */}
       <div>
            <div className="flex justify-between items-center w-full mb-3">
                 <span className="font-medium">Price</span>
            
                    {
                        showPrice ?

                        <button onClick={()=>setShowPrice(!showPrice)}>
                         <IoIosArrowUp />
                        </button>

                        :

                        <button onClick={()=>setShowPrice(!showPrice)}>
                         <FiChevronDown />
                        </button>
                    }

            </div>

            {
                showPrice &&

                <div>
                        <div className="relative w-full h-6 flex items-center">
                            {/* Track background */}
                            <div className="absolute w-full h-1 bg-gray-200 rounded"></div>

                            {/* Highlighted range */}
                            <div
                                className="absolute h-1 bg-black rounded"
                                style={{
                                left: `${((minPrice - 50) / (200 - 50)) * 100}%`,
                                right: `${100 - ((maxPrice - 50) / (200 - 50)) * 100}%`,
                                }}
                            ></div>

                            {/* Min range */}
                            <input
                                type="range"
                                min="50"
                                max="200"
                                value={minPrice}
                                onChange={(e) =>
                                setMinPrice(Math.min(Number(e.target.value), maxPrice - 10))
                                }
                                className="absolute w-full appearance-none bg-transparent pointer-events-auto"
                            />

                            {/* Max range */}
                            <input
                                type="range"
                                min="50"
                                max="200"
                                value={maxPrice}
                                onChange={(e) =>
                                setMaxPrice(Math.max(Number(e.target.value), minPrice + 10))
                                }
                                className="absolute w-full appearance-none bg-transparent pointer-events-auto"
                            />
                        </div>

                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                            <span>${minPrice}</span>
                            <span>${maxPrice}</span>
                        </div>
                </div>
            }

      </div>


      {/* Size */}
      <div>
        <div className="flex justify-between items-center w-full mb-3">
          <span className="font-medium">Size</span>

                {
                    showSize ?

                <button onClick={()=>setShowSize(!showSize)}>
                    <IoIosArrowUp />
                </button>

                :

                <button onClick={()=>setShowSize(!showSize)}>
                    <FiChevronDown />
                </button>

                }

        </div>
        {
            showSize &&
            
            <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 rounded-full border text-sm bg-gray-100 text-gray-600 border-gray-200 cursor-pointer hover:bg-[#000] hover:text-[#fff] duration-[.4s]">XX-Small</button>
                <button className="px-3 py-1 rounded-full border text-sm bg-gray-100 text-gray-600 border-gray-200 cursor-pointer hover:bg-[#000] hover:text-[#fff] duration-[.4s]">X-Small</button>
                <button className="px-3 py-1 rounded-full border text-sm bg-gray-100 text-gray-600 border-gray-200 cursor-pointer hover:bg-[#000] hover:text-[#fff] duration-[.4s]">Small</button>
                <button className="px-3 py-1 rounded-full border text-sm bg-gray-100 text-gray-600 border-gray-200 cursor-pointer hover:bg-[#000] hover:text-[#fff] duration-[.4s]">Medium</button>
                <button className="px-3 py-1 rounded-full border text-sm bg-gray-100 text-gray-600 border-gray-200 cursor-pointer hover:bg-[#000] hover:text-[#fff] duration-[.4s]">Large</button>
                <button className="px-3 py-1 rounded-full border text-sm bg-gray-100 text-gray-600 border-gray-200 cursor-pointer hover:bg-[#000] hover:text-[#fff] duration-[.4s]">X-Large</button>
                <button className="px-3 py-1 rounded-full border text-sm bg-gray-100 text-gray-600 border-gray-200 cursor-pointer hover:bg-[#000] hover:text-[#fff] duration-[.4s]">XX-Large</button>
                <button className="px-3 py-1 rounded-full border text-sm bg-gray-100 text-gray-600 border-gray-200 cursor-pointer hover:bg-[#000] hover:text-[#fff] duration-[.4s]">3X-Large</button>
                <button className="px-3 py-1 rounded-full border text-sm bg-gray-100 text-gray-600 border-gray-200 cursor-pointer hover:bg-[#000] hover:text-[#fff] duration-[.4s]">4X-Large</button>
            </div>
        }
      </div>


      {/* Apply Button */}
      <button className="mt-3 bg-black text-white py-2 rounded-xl hover:bg-gray-800">
        Apply Filter
      </button>
    </div>
  );
};

export default FilterSidebar;
