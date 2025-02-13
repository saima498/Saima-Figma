
import React from "react";
import Image from "next/image";

const Rooms = () => {
  return (
    <div className="flex flex-col items-center bg-[#FCF8F3] w-full py-8 lg:py-16 relative bottom-24 ">
      <div className="flex flex-col lg:flex-row lg:items-start max-w-screen-xl w-full px-4 sm:px-8 lg:px-16">
        {/* Left Content */}
        <div className="flex flex-col text-left mb-8 lg:mb-0 lg:w-1/2">
          <h1 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold leading-tight">
            50+ Beautiful Rooms Inspiration
          </h1>
          <p className="text-base sm:text-lg mt-4 lg:mt-8 max-w-md">
            Our designers have already created many beautiful room prototypes to inspire you.
          </p>
          <button
            className="w-full sm:w-[176px] h-[48px] mt-6 lg:mt-8 bg-[#B88E2F] text-white text-[14px] sm:text-[16px] lg:text-[20px] px-6 py-2 rounded"
            aria-label="Explore More Rooms"
          >
            Explore More
          </button>
        </div>

        {/* Right Images */}
        <div className="flex flex-col lg:flex-row lg:justify-end items-center mt-12 lg:mt-0 gap-8 lg:w-1/2">
          {/* First Image */}
          <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px]">
            <Image
              src="/Rectangle 24.png"
              alt="Beautiful room inspiration"
              width={450}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-gray-100 w-[200px] sm:w-[240px] lg:w-[260px] h-[80px] sm:h-[100px] border border-[#616161] text-center p-4 rounded-lg">
              <span className="font-bold text-sm sm:text-base">
                01 ---- Bed Room
              </span>
              <br />
              <span className="text-base sm:text-lg text-black font-bold">
                Inner Peace
              </span>
            </div>
          </div>

          {/* Second Image */}
          <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[430px]">
            <Image
              src="/Rectangle 25.png"
              alt="Beautiful room inspiration"
              width={430}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
