
import React from 'react';
import Image from 'next/image';


const Rooms = () => {
  return (
    <div className="rooms-container">
      <div className="rooms-content">
        {/* Left Content */}
        <div className="rooms-left">
          <h1 className="rooms-title">50+ Beautiful Rooms Inspiration</h1>
          <p className="rooms-description">
            Our designers have already created many beautiful room prototypes to inspire you.
          </p>
          <button className="rooms-button" aria-label="Explore More Rooms">
            Explore More
          </button>
        </div>

        {/* Right Images */}
        <div className="rooms-right">
          <div className="rooms-image-container">
            <Image
              src="/Rectangle 24.png"
              alt="Beautiful room inspiration"
              width={380}
              height={200}
              className="rooms-image"
            />
            <div className="rooms-caption">
              <span className="caption-number">01 ---- Bed Room</span>
              <span className="caption-title">Inner Peace</span>
            </div>
          </div>

          <div className="rooms-image-container">
            <Image
              src="/Rectangle 25.png"
              alt="Beautiful room inspiration"
              width={400}
              height={500}
              className="rooms-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;