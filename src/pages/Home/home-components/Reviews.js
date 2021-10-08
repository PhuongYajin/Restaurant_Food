import React from 'react';
import CardReview from './CardReview';

export default function Reviews() {
  return (
    <div id="reviews" className="">
      <div className="text-center py-12">
        <p className="text-5xl sm:text-6xl text-[#666] font-semibold lg:text-7xl lg:p-12 xl:text-8xl">
          Our Customers
          <span className="text-[#ff3838]"> Reviews</span>
        </p>
        <div className="pt-10 p-5 sm:flex sm:p-0 gap-2 sm:px-4 lg:justify-center lg:gap-5">
          <CardReview urlImage="images/pic1.png" name="John Deo" cmt="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti Delectus, Ducimus Facere Quod Ratione Vel Laboriosam? Est, Maxime Rem. Itaque." />
          <CardReview urlImage="images/pic2.png" name="John Deo" cmt="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti Delectus, Ducimus Facere Quod Ratione Vel Laboriosam? Est, Maxime Rem. Itaque." />
          <CardReview urlImage="images/pic3.png" name="John Deo" cmt="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti Delectus, Ducimus Facere Quod Ratione Vel Laboriosam? Est, Maxime Rem. Itaque." />
        </div>
      </div>
    </div>
  );
}
