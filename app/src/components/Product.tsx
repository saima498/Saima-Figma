import React from 'react';
import Image from 'next/image';


const products = [
  {
    id: 1,
    name: 'Grifo',
    description: 'Night lamp',
    imageSrc: '/image 9.png',
    price: 'Rp 1.500.000',
    oldPrice: '',
  },
  {
    id: 2,
    name: 'Muggo',
    description: 'Small mug',
    imageSrc: '/image 6.png',
    price: 'Rp 150.000',
    oldPrice: '',
  },
  {
    id: 3,
    name: 'Pingky',
    description: 'Cute bed set',
    imageSrc: '/image 7.png',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
  },
  {
    id: 4,
    name: 'Potty',
    description: 'Minimalist flower',
    imageSrc: '/image 8.png',
    price: 'Rp 500.000',
    oldPrice: '',
  },
];

const OurProduct = () => {
  return (
    <div className="our-products-container">
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
              <span className="product-price">{product.price}</span>
              {product.oldPrice && (
                <span className="old-price">{product.oldPrice}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;