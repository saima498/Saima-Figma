import React from 'react';
import Image from 'next/image';


const products = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    imageSrc: '/image 1.png',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Comfortable armchair',
    imageSrc: '/image 1.png',
    price: 'Rp 3.000.000',
    oldPrice: 'Rp 4.000.000',
  },
  {
    id: 3,
    name: 'Potter',
    description: 'Classic wooden chair',
    imageSrc: '/image 3.png',
    price: 'Rp 1.800.000',
    oldPrice: 'Rp 2.500.000',
  },
  {
    id: 4,
    name: 'Griffin',
    description: 'Elegant dining chair',
    imageSrc: '/images.png',
    price: 'Rp 2.200.000',
    oldPrice: 'Rp 3.000.000',
  },
  
];

const OurProduct = () => {
  return (
    <div className="our-products-container">
      <h2 className="our-products-title">Our Products</h2>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Image
              src={product.imageSrc}
              alt={product.name}
              width={1000}
              height={500}
              className="product-image"
              layout="responsive"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-price-container">
              <span className="product-price">{product.price}</span>{' '}
              <span className="old-price">{product.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;