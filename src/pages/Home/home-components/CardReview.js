/* eslint-disable react/prop-types */
import React from 'react';

export default function CardReview({ urlImage, name, cmt }) {
  return (
    <div
      style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2) ' }}
      className="bg-[#333] text-white flex flex-col justify-center items-center mt-[50px] border-8 border-white rounded-lg mb-4 lg:w-[25%]"
    >
      <div className="mt-[-60px] mb-2 flex justify-center">
        <img
          className="w-[30vw] max-w-[120px] border-8 border-white rounded-full"
          src={urlImage}
          alt={name}
        />
      </div>
      <div>
        <p className="text-[2rem] font-bold">{name}</p>
        <p className="text-[2rem] font-bold py-1">Star</p>
        <p className="text-[#eee] text-lg font-semibold px-8 pb-10 sm:px-2">
          {cmt}
        </p>
      </div>
    </div>
  );
}
