import React from 'react';
import CardGallery from './CardGallery';

export default function Gallery() {
  return (
    <div id="gallery" className="pt-8 text-center">
      <p className="text-5xl sm:text-6xl text-[#666] font-semibold p-10 lg:text-7xl xl:text-8xl">
        Our Food
        <span className="text-[#ff3838]"> Gallery</span>
      </p>
      <div className="p-6 sm:pt-0 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:gap-6">
        <CardGallery urlImage="images/g-1.jpg" nameFood="Tasty food" des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." />
        <CardGallery urlImage="images/g-2.jpg" nameFood="Tasty food" des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." />
        <CardGallery urlImage="images/g-3.jpg" nameFood="Tasty food" des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." />
        <CardGallery urlImage="images/g-4.jpg" nameFood="Tasty food" des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." />
        <CardGallery urlImage="images/g-5.jpg" nameFood="Tasty food" des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." />
        <CardGallery urlImage="images/g-6.jpg" nameFood="Tasty food" des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." />
        <CardGallery urlImage="images/g-7.jpg" nameFood="Tasty food" des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." />
        <CardGallery urlImage="images/g-8.jpg" nameFood="Tasty food" des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." />
        <CardGallery urlImage="images/g-9.jpg" nameFood="Tasty food" des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." />
      </div>
    </div>
  );
}
