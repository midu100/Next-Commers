import React from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import all1 from '@/public/all1.png'

const page = () => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto">
        <h1 className="text-[24px] font-bold mb-6">YOUR CART</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side: Cart Items */}
          <div className="flex-1 bg-white rounded-[16px] shadow p-4">
            {/* Single Cart Item */}
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-[80px] h-[80px] bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={all1}
                    alt="Product"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-[16px] font-medium">
                    Gradient Graphic T-shirt
                  </h2>
                  <p className="text-[14px] text-gray-500">Size: Large</p>
                  <p className="text-[14px] text-gray-500">Color: White</p>
                  <h3 className="text-[16px] font-semibold mt-1">$145</h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-[10px] px-2 py-1">
                  <button className="px-2 text-lg">-</button>
                  <span className="px-2">1</span>
                  <button className="px-2 text-lg">+</button>
                </div>
                <button className="text-red-500 text-xl">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
            
          </div>

          {/* Right Side: Order Summary */}
          <div className="w-full lg:w-[350px] bg-white rounded-[16px] shadow p-6">
            <h2 className="text-[18px] font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <p className="text-[14px]">Subtotal</p>
              <p className="text-[14px] font-medium">$565</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-[14px]">Discount (-20%)</p>
              <p className="text-[14px] text-red-500">- $113</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-[14px]">Delivery Fee</p>
              <p className="text-[14px] text-red-500">$15</p>
            </div>
            <div className="flex justify-between mt-4 border-t pt-4">
              <p className="text-[16px] font-semibold">Total</p>
              <p className="text-[16px] font-semibold">$467</p>
            </div>

            {/* Promo code */}
            <div className="flex mt-6">
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-1 px-4 py-2 border rounded-l-[10px] outline-none text-[14px]"
              />
              <button className="bg-black text-white px-6 rounded-r-[10px]">
                Apply
              </button>
            </div>

            {/* Checkout */}
            <button className="w-full bg-black text-white py-3 rounded-[10px] mt-6 font-medium flex justify-center items-center gap-2">
              Go to Checkout →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
