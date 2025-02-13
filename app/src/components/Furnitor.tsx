import React from 'react';
import Image from 'next/image';

const Furnitor = () => {
  return (
    <div className="pt-56">
      {/* Header Section */}
      <div className="text-center text-[#616161] text-sm">Share your setup with</div>
      <div className="text-center text-[#3A3A3A] font-bold text-2xl">#FuniroFurniture</div>

      {/* First Row of Images */}
      <div className="flex justify-center flex-wrap gap-6 mt-10">
        <Image src="/Rectangle 36.png" alt="Furniture 1" width={100} height={100} />
        <Image src="/Rectangle 38.png" alt="Furniture 2" width={400} height={590} />
        <Image src="/Rectangle 40.png" alt="Furniture 3" width={300} height={700} />
        <Image src="/Rectangle 43.png" alt="Furniture 4" width={370} height={590} />
        <Image src="/Rectangle 45.png" alt="Furniture 5" width={100} height={300} />
      </div>

      {/* Second Row of Images */}
      <div className="flex justify-center flex-wrap gap-6 mt-10">
        <Image src="/Rectangle 37.png" alt="Furniture 6" width={170} height={400} />
        <Image src="/Rectangle 39.png" alt="Furniture 7" width={370} height={360} />
        <Image src="/Rectangle 41.png" alt="Furniture 8" width={330} height={360} />
        <Image src="/Rectangle 44.png" alt="Furniture 9" width={370} height={360} />
      </div>
    </div>
  );
};

export default Furnitor;
