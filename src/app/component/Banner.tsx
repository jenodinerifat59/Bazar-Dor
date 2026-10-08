import React from "react";
import Datepage from "./Date";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="border border-gray-300 rounded-2xl p-4 sm:p-6 lg:p-8 mt-2 shadow-lg lg:mt-6">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8">
      
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="bg-green-200 w-fit py-1.5 px-4 text-green-700 font-semibold rounded-2xl text-sm sm:text-base">
            <Datepage />
          </div>
          
          <h1 className="font-black text-2xl sm:text-3xl lg:text-4xl text-black py-3 sm:py-4 leading-tight">
            আজকের বাজারের দাম এক নজরে
          </h1>
          
          <p className="max-w-2xl font-light text-sm sm:text-base lg:text-lg text-gray-500 mb-6">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <button className="btn bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-base sm:text-lg font-medium transition-colors">
            সব পণ্য দেখুন
          </button>
        </div>
        <div className="w-full max-w-[280px] sm:max-w-[315px] md:w-auto flex justify-center">
          <Image 
            src="/bazar-hero.png" 
            alt="logo" 
            width={315} 
            height={268} 
            className="w-full h-auto object-contain"
            priority
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;