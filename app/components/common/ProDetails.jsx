import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProDetails = () => {
  return (
    <div className="w-full max-w-[420px]">
      {/* Title */}
      <h1 className="text-[22px] md:text-[26px] font-extrabold uppercase">
        ONE LIFE GRAPHIC T-SHIRT
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-2">
        <div className="flex text-yellow-400 text-[18px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className="text-[14px] font-medium text-gray-700">4.5/5</p>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 mt-4">
        <h2 className="text-[22px] font-bold">$260</h2>
        <span className="text-[20px] line-through text-gray-400">$300</span>
        <span className="text-[14px] bg-red-100 text-red-500 px-2 py-1 rounded-md">
          -40%
        </span>
      </div>

      {/* Description */}
      <p className="text-[14px] text-gray-600 mt-3 leading-relaxed">
        This graphic t-shirt which is perfect for any occasion. Crafted from a
        soft and breathable fabric, it offers superior comfort and style.
      </p>

      <hr className="my-5" />

      {/* Colors */}
      <div className="mb-5">
        <h3 className="text-[14px] font-semibold mb-2">Select Colors</h3>
        <div className="flex gap-3">
          <button className="w-8 h-8 rounded-full bg-green-900 border-2 border-black"></button>
          <button className="w-8 h-8 rounded-full bg-green-700"></button>
          <button className="w-8 h-8 rounded-full bg-indigo-900"></button>
        </div>
      </div>

      <hr className="my-5" />

      {/* Sizes */}
      <div className="mb-5">
        <h3 className="text-[14px] font-semibold mb-2">Choose Size</h3>
        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg text-[14px] text-gray-700 hover:bg-black hover:text-white transition">
            Small
          </button>
          <button className="px-4 py-2 border rounded-lg text-[14px] text-gray-700 hover:bg-black hover:text-white transition">
            Medium
          </button>
          <button className="px-4 py-2 border rounded-lg text-[14px] font-semibold bg-black text-white">
            Large
          </button>
          <button className="px-4 py-2 border rounded-lg text-[14px] text-gray-700 hover:bg-black hover:text-white transition">
            X-Large
          </button>
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="flex items-center gap-3 mt-6">
        {/* Quantity Counter */}
        <div className="flex items-center border rounded-lg px-3 py-2">
          <button className="px-2 text-lg">-</button>
          <span className="px-3">1</span>
          <button className="px-2 text-lg">+</button>
        </div>

        {/* Add to Cart */}
        <button className="flex-1 bg-black text-white py-3 rounded-lg font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProDetails;
