import React from 'react';
import Image from 'next/image';


const Furnitor = () => {
  return (
    <div className="furnitor-container">
      <div className="header-text">
        <p className="subheading">Share your setup with</p>
        <h2 className="main-heading">#FuniroFurniture</h2>
      </div>
      <div className="image-row">
        <Image src="/Rectangle 36.png" alt="img" width={100} height={100} className="image-small" />
        <Image
          src="/Rectangle 38.png"
          alt="img"
          width={400}
          height={50}
          className="image-medium"
        />
        <Image
          src="/Rectangle 40.png"
          alt="img"
          width={300}
          height={50}
          className="image-tall"
        />
        <Image
          src="/Rectangle 43.png"
          alt="img"
          width={370}
          height={20}
          className="image-medium"
        />
        <Image src="/Rectangle 45.png" alt="img" width={100} height={300} className="image-small" />
      </div>
      <div className="image-row">
        <Image src="/Rectangle 37.png" alt="img" width={170} height={20} className="image-tall" />
        <Image src="/Rectangle 39.png" alt="img" width={370} height={200} className="image-medium" />
        <Image
          src="/Rectangle 41.png"
          alt="img"
          width={330}
          height={200}
          className="image-medium-wide"
        />
        <Image src="/Rectangle 44.png" alt="img" width={370} height={200} className="image-medium" />
      </div>
    </div>
  );
};

export default Furnitor;