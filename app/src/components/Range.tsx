import React from 'react';
import Image from 'next/image';


const Range = () => {
  return (
    <div className="range">
      {/* Title Section */}
      <div className="range-title">
        Browse The Range
        <p className="range-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image and Labels Section */}
      <div className="range-container">
        {/* Dining Section */}
        <div className="range-item">
          <Image
            src="/Mask Group.png"
            alt="Dining"
            width={381}
            height={480}
            className="w-[381px] h-[480px]"
          />
          <div className="range-label">Dining</div>
        </div>

        {/* Living Section */}
        <div className="range-item">
          <Image
            src="/room.png"
            alt="Living"
            width={381}
            height={480}
            className="w-[381px] h-[480px]"
          />
          <div className="range-label">Living</div>
        </div>

        {/* Bedroom Section */}
        <div className="range-item">
          <Image
            src="/Mask.png"
            alt="Bedroom"
            width={381}
            height={480}
            className="w-[381px] h-[480px]"
          />
          <div className="range-label">Bedroom</div>
        </div>
      </div>
    </div>
  );
};

export default Range;