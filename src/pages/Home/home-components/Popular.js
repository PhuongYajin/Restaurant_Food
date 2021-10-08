import React from 'react';
import Card from './CardPopular';
import HowItWork from './HowItWork';

export default function Popular() {
  return (
    <div id="popular" className="px-5 pt-10">
      <div className="text-5xl sm:text-6xl lg:text-7xl text-center font-semibold pt-12 pb-10 text-[#666] lg:pt-32 xl:text-8xl">
        <p>
          Most
          <span className="text-[#ff3838]"> Popular </span>
          Foods
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4 pb-20">
        <Card urlImage="images/p-1.jpg" foodName="Tasty Burger" />
        <Card urlImage="images/p-2.jpg" foodName="Tasty Cakes" />
        <Card urlImage="images/p-3.jpg" foodName="Tasty Sweets" />
        <Card urlImage="images/p-4.jpg" foodName="Tasty Cupcakes" />
        <Card urlImage="images/p-5.jpg" foodName="Cold Drinks" />
        <Card urlImage="images/p-6.jpg" foodName="Cold Ice-Cream" />
      </div>

      <HowItWork />
    </div>
  );
}
