import React from 'react';

export default function Order() {
  return (
    <div id="order" className="p-6 sm:px-12">
      <div className="text-5xl sm:text-6xl text-center font-semibold pb-10 text-[#666] xl:text-8xl lg:text-7xl">
        <p>
          <span className="text-[#ff3838]"> Order </span>
          now
        </p>
      </div>
      <div className="p-6 bg-white md:flex md:gap-5">
        <div className="">
          <img className="rounded-lg object-cover h-full" src="images/order-img.jpg" alt="order_image" />
        </div>
        <div className="pt-10 pb-8 sm:pb-0 px-3 sm:flex flex-wrap sm:justify-start md:justify-between">
          <input className="border border-gray-300 rounded-lg w-full sm:w-[48%] sm:mr-2 text-xl xl:text-2xl lg:font-semibold p-3 mb-6" placeholder="Name" type="text" />
          <input className="border border-gray-300 rounded-lg w-full sm:w-[48%] text-xl xl:text-2xl lg:font-semibold p-3 mb-6" placeholder="Email" type="text" />
          <input className="border border-gray-300 rounded-lg w-full sm:w-[48%] sm:sm:mr-2 text-xl xl:text-2xl lg:font-semibold p-3 mb-6" placeholder="Number" type="text" />
          <input className="border border-gray-300 rounded-lg w-full sm:w-[48%] text-xl xl:text-2xl lg:font-semibold p-3 mb-6" placeholder="Food name" type="text" />
          <textarea className="border border-gray-300 rounded-lg w-full h-[120px] sm:flex-2 text-xl xl:text-2xl lg:font-semibold p-3 mb-6" placeholder="Adress" type="text" />
          <button className="btn-order border md:py-3 md:border-2 md:text-2xl border-[#ff3838] rounded-lg py-2 px-8 text-[#ff3838] text-xl xl:text-2xl font-bold" type="submit">Order Now</button>
        </div>

      </div>
    </div>
  );
}
