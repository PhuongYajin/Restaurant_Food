import React from 'react';

export default function Suggest() {
  return (
    <div id="home" className="home flex flex-col px-8 py-32 gap-5 items-center flex-wrap sm:flex-row sm:h-[100vh] xl:p-32 xl:gap-32">
      <div className=" flex-1 self-center">
        <h1 className="pt-6 xl:text-8xl text-5xl sm:text-6xl lg:text-7xl font-bold text-[#333]">Food Made With Love</h1>
        <p className="text-lg xl:text-3xl xl:pl-12 xl:pr-12 xl:py-24 sm:text-xl lg:text-2xl font-semibold text-[#666] py-10 pl-7">
          Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Voluptas Accusamus Tempore
          Temporibus Rem Amet Laudantium Animi Optio Voluptatum. Natus Obcaecati Unde Porro Nostrum
          Ipsam Itaque Impedit Incidunt Rem Quisquam Eos!
        </p>
        <button className="btn-order border-2 xl:text-3xl border-[#ff3838] rounded-lg py-3 px-10 lg:px-12 text-[#ff3838] lg:text-2xl lg:py-4 text-xl font-bold" type="submit">Order Now</button>
      </div>
      <div className="home-img flex flex-1 justify-center">
        <img className="w-3/4 sm:w-full" src="images/home-img.png" alt="" />
      </div>
    </div>
  );
}
