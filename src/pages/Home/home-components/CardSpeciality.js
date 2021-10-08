import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Card({ urlImage, urlIcon, title }) {
  return (
    <div
      style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}
      className="box sm:w-[48%] lg:w-[32%] mb-8 relative overflow-hidden rounded-xl xl:w-[30%] xl:mb-0"
    >
      <img className="image-food top-[-100%] absolute rounded-xl w-full h-full object-cover" src={urlImage} alt="image_Food" />
      <div className="box-content py-10 bg-white border border-gray-400 rounded-xl p-6 xl:py-24">
        <div className="flex justify-center">
          <img className="w-[60px] h-[60px]" src={urlIcon} alt="" />
        </div>
        <p className="text-[#333] font-bold sm:text-3xl text-3xl py-6 lg:text-4xl lg:py-8">{title}</p>
        <p className="text-xl text-[#666] font-semibold lg:text-2xl lg:px-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque
          amet ipsa tenetur voluptates aperiam tempore libero labore aut.
        </p>
      </div>
    </div>
  );
}
