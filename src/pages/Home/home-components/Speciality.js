/* eslint-disable max-len */
import React from 'react';
import Card from './CardSpeciality';

export default function Speciality() {
  return (
    <div id="speciality" className="px-8 md:py-8 md:px-32 lg:h-screen lg:px-5 xl:px-32">
      <div className="text-center text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold pt-12 pb-10 lg:text-7xl lg:pb-16">
        <p className="text-[#666]">
          Our
          <span className="text-[#ff3838]"> Speciality</span>
        </p>
      </div>

      <div
        className="flex justify-around flex-wrap items-center md:gap-[1.25rem] lg:gap-0.5 text-center xl:justify-center xl:gap-12"
      >
        <Card urlImage="images/s-img-1.jpg" urlIcon="images/s-1.png" title="Tasty Burger" />
        <Card urlImage="images/s-img-2.jpg" urlIcon="images/s-2.png" title="Tasty Pizza" />
        <Card urlImage="images/s-img-3.jpg" urlIcon="images/s-3.png" title="Cold Ice-Cream" />
        <Card urlImage="images/s-img-4.jpg" urlIcon="images/s-4.png" title="Cold Drinks" />
        <Card urlImage="images/s-img-5.jpg" urlIcon="images/s-5.png" title="Tasty Sweets" />
        <Card urlImage="images/s-img-6.jpg" urlIcon="images/s-6.png" title="Healthy Breakfast" />
      </div>
    </div>
  );
}
