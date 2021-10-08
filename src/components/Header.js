import React from 'react';

export default function Header() {
  return (
    <div
      style={{ boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 10%)' }}
      className="fixed top-0 left-0 right-0 flex justify-between items-center bg-white px-10
      md:px-32 z-50"
    >
      <a href="#gallery" className="logo text-5xl font-bold text-[#666] py-7">
        <i className="fas fa-utensils text-red-500 mr-2" />
        Food
      </a>

      <div>
        <i id="menu-bar" className="fas fa-bars md:hidden text-4xl p-7 text-[#666]" />
      </div>

      <nav className="hidden md:block navbar text-[1.6rem] font-bold font-serif text-[#666]">
        <a className="px-5 py-8" href="#home">Home</a>
        <a className="px-5 py-8" href="#speciality">Speciality</a>
        <a className="px-5 py-8" href="#popular">Popular</a>
        <a className="px-5 py-8" href="#gallery">Gallery</a>
        <a className="px-5 py-8" href="#reviews">Review</a>
        <a className="px-5 py-8" href="#order">Order</a>
      </nav>
    </div>
  );
}
