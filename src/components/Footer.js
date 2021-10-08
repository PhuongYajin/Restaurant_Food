import React from 'react';

export default function Footer() {
  return (
    <div id="footer" className="bg-black py-12 px-2 text-center">
      <div className=" text-[#ff3838] flex flex-wrap justify-center gap-4">
        <p className="border rounded-lg border-[#ff3838] min-w-[100px] text-lg py-2">Facebook</p>
        <p className="border rounded-lg border-[#ff3838] min-w-[100px] text-lg py-2">Twitter</p>
        <p className="border rounded-lg border-[#ff3838] min-w-[100px] text-lg py-2">Instagram</p>
        <p className="border rounded-lg border-[#ff3838] min-w-[100px] text-lg py-2">Pinterest</p>
        <p className="border rounded-lg border-[#ff3838] min-w-[100px] text-lg py-2">Linkedin</p>
      </div>
      <p className="text-white pt-12 text-2xl font-semibold">
        Creat by Nguyen Kim Phuong
      </p>
    </div>
  );
}
