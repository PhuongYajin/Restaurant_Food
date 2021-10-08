/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function CardGallery({ urlImage, nameFood, des }) {
  return (
    <div
      style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}
      className="gallery-card relative mb-8 sm:mb-0 bg-white flex flex-col justify-center items-center min-h-[200px] overflow-hidden p-8 sm:p-2 rounded-md sm:w-[45%] lg:w-[30%] lg:p-3"
    >
      <img className="" src={urlImage} alt={nameFood} />
      <div className="text-gallery flex flex-col justify-center items-center absolute bg-white opacity-80 top-[-100%]">
        <p className="text-4xl font-bold p-10 sm:p-4 lg:text-4xl xl:text-5xl">{nameFood}</p>
        <p className="text-xl lg:text-xl xl:text-2xl lg:py-3 text-[#333] sm:text-lg pb-10 lg:pb-8 sm:px-10 px-20 font-semibold">{des}</p>
        <button className="btn-order border-2 border-[#ff3838] rounded-lg sm:py-2 lg:py-3 lg:px-10 py-3 px-8 text-[#ff3838] text-2xl font-bold" type="submit">Order Now</button>
      </div>
    </div>
  );
}
