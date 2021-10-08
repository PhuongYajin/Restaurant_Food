import React from 'react';

export default function HowItWork() {
  return (
    <div className="mb-12">
      <p className="text-center sm:text-6xl lg:text-7xl text-5xl font-semibold pb-10 text-[#666] xl:text-8xl ">
        How It
        <span className="text-[#ff3838]"> Works </span>
      </p>
      <div className="flex justify-between flex-wrap items-center gap-8">
        <div className="flex flex-col items-center flex-1">
          <img className="min-w-[150px] h-[150px] border-8 border-white rounded-[50%]" src="images/step-1.jpg" alt="" />
          <p className="text-2xl lg:text-3xl lg:pt-5 font-bold text-center text-[#333]">Choose Your Favorite Food</p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <img className="min-w-[150px] h-[150px] border-8 border-white rounded-[50%]" src="images/step-2.jpg" alt="" />
          <p className="text-2xl lg:text-3xl lg:pt-5 font-bold text-center text-[#333]">Choose Your Favorite Food</p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <img className="min-w-[150px] h-[150px] border-8 border-white rounded-[50%]" src="images/step-3.jpg" alt="" />
          <p className="text-2xl lg:text-3xl lg:pt-5 font-bold text-center text-[#333]">Choose Your Favorite Food</p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <img className="min-w-[150px] h-[150px] border-8 border-white rounded-[50%]" src="images/step-4.jpg" alt="" />
          <p className="text-2xl lg:text-3xl lg:pt-5 font-bold text-center text-[#333]">Choose Your Favorite Food</p>
        </div>
      </div>
    </div>
  );
}
