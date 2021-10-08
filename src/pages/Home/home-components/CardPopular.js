/* eslint-disable react/prop-types */
import React from 'react';

export default function BoxPopular({ urlImage, foodName }) {
  return (
    <div
      style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}
      className="border border-gray-400 rounded-md relative p-7 mb-3 text-center md:w-[45%] lg:w-[30%] w-[80%]"
    >
      <div className="relative">
        <img className="rounded-md object-cover min-h-[175px] lg:min-h-[290px]" src={urlImage} alt="" />
        <p className="absolute top-5 left-5 text-2xl font-semibold text-white z-10 py-3 px-5 bg-[#ff3838] rounded-lg lg:text-3xl">$5 - $20</p>
      </div>

      <p className="text-3xl lg:text-4xl text-[#333] lg:pt-12 pt-6 font-bold">{foodName}</p>
      <div className="py-6 lg:py-8">
        <i className="fas fa-star text-[1.7rem] lg:text-4xl text-yellow-400 px-1" />
        <i className="fas fa-star text-[1.7rem] lg:text-4xl text-yellow-400 px-1" />
        <i className="fas fa-star text-[1.7rem] lg:text-4xl text-yellow-400 px-1" />
        <i className="fas fa-star text-[1.7rem] lg:text-4xl text-yellow-400 px-1" />
        <i className="fas fa-star font-normal text-[1.7rem] lg:text-4xl text-yellow-400 px-1" />
      </div>
      <button className="btn-order border-2 lg:text-2xl lg:font-bold lg:py-3 lg:px-12 border-[#ff3838] rounded-lg py-2 px-8 text-[#ff3838] text-xl sm:font-semibold font-bold" type="submit">Order Now</button>
    </div>
  );
}
