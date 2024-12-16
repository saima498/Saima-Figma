import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const products = [
  {
    id: 1,
    name: 'Grifo',
    description: 'Night lamp',
    imageSrc: '/image 1.png',
    price: 'Rp 1.500.000',
    oldPrice: ' ',
    link: "./Singleproduct",

 
  },
  {
    id: 2,
    name: 'Muggo',
    description: 'Small mug',
    imageSrc: '/image 1.png',
    price: 'Rp 150.000',
    oldPrice: ' ',
    link: "./Singleproduct"
  },
  {
    id: 3,
    name: 'Pingky',
    description: 'Cute bed set',
    imageSrc: '/image 3.png',
    price: 'Rp 7.000.000',
    oldPrice: 'Rp 14.000.000',
    link: "./Singleproduct"
  },
  {
    id: 4,
    name: 'Potty',
    description: 'Minimalist flower',
    imageSrc: '/images.png',
    price: 'Rp 500.000',
    oldPrice: ' ',
    link: "./Singleproduct"
    
  },
];

const Product = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="flex flex-wrap justify-center gap-6 w-[80%]">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[290px] h-[430px] bg-slate-100 flex flex-col items-center p-4 rounded-lg shadow-md relative group"
          >
            {/* Wrap Image component inside Link */}
            <Link href={product.link}>
             
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={1000}
                  height={500}
                  className="mb-4 object-cover rounded-lg cursor-pointer"
                  layout="responsive"
                />
           
            </Link>

            {/* Product Name and Description */}
            <h3 className="text-[18px] font-bold mb-2 mr-[170px]">{product.name}</h3>
            <p className="text-[14px] text-gray-700 mb-5 mr-[150px]">{product.description}</p>

            {/* Price and Old Price */}
            <div className="text-center">
              <span className="text-[16px] font-bold text-black mr-[140px] ">{product.price}</span>{' '}
              <span className="text-[14px] text-gray-400 top-32">{product.oldPrice}</span>
            </div>

            {/* Hover Effect: Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <Link href={product.link}>
                <div className="text-black px-4 py-2 bg-white border-4 border-yellow-600 rounded-lg">Add To Card</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
