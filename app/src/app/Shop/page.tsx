import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    imageSrc: "/image 1.png",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Comfortable armchair",
    imageSrc: "/image 3 (1).png",
    price: "Rp 3.000.000",
    oldPrice: "Rp 4.000.000",
  },
  {
    id: 3,
    name: "Potter",
    description: "Classic wooden chair",
    imageSrc: "/images.png",
    price: "Rp 1.800.000",
    oldPrice: "Rp 2.500.000",
  },
  {
    id: 4,
    name: "Griffin",
    description: "Elegant dining chair",
    imageSrc: "/image 3 (1).png",
    price: "Rp 2.200.000",
    oldPrice: "Rp 3.000.000",
  },
  {
    id: 5,
    name: "Syltherine",
    description: "Stylish cafe chair",
    imageSrc: "/image 1.png",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
  },
  {
    id: 6,
    name: "Leviosa",
    description: "Comfortable armchair",
    imageSrc: "/image 2.png",
    price: "Rp 3.000.000",
    oldPrice: "Rp 4.000.000",
  },
  {
    id: 7,
    name: "Potter",
    description: "Classic wooden chair",
    imageSrc: "/image 3 (1).png",
    price: "Rp 1.800.000",
    oldPrice: "Rp 2.500.000",
  },
  {
    id: 8,
    name: "Griffin",
    description: "Elegant dining chair",
    imageSrc: "/images.png",
    price: "Rp 2.200.000",
    oldPrice: "Rp 3.000.000",
  },

  {
    id: 9,
    name: "Syltherine",
    description: "Stylish cafe chair",
    imageSrc: "/image 1.png",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
  },
  {
    id: 10,
    name: "Leviosa",
    description: "Comfortable armchair",
    imageSrc: "/image 2.png",
    price: "Rp 3.000.000",
    oldPrice: "Rp 4.000.000",
  },
  {
    id: 11,
    name: "Potter",
    description: "Classic wooden chair",
    imageSrc: "/image 3 (1).png",
    price: "Rp 1.800.000",
    oldPrice: "Rp 2.500.000",
  },
  {
    id: 12,
    name: "Griffin",
    description: "Elegant dining chair",
    imageSrc: "/images.png",
    price: "Rp 2.200.000",
    oldPrice: "Rp 3.000.000",
  },
  
  
];

const Navbar = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="bg-white w-full h-16 flex items-center justify-between px-6 shadow-md fixed top-0 z-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/icon.png"
            alt="Furniro Logo"
            width={60}
            height={60}
            priority
          />
          <div className="text-[24px] font-bold ml-4">Furniro</div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-500 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-gray-800">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-800">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-800">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center text-lg text-gray-700 gap-6">
          <FaUserAlt className="cursor-pointer" aria-label="User Profile" />
          <IoSearch className="cursor-pointer" aria-label="Search" />
          <FaRegHeart className="cursor-pointer" aria-label="Wishlist" />
          <Link href='./Card'><BsCart3 className="cursor-pointer" aria-label="Cart" /></Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full relative top-[60px]">
        <Image
          src="/Rectangle1.png"
          alt="Home background"
          width={1590}
          height={1008}
          layout="responsive"
          priority
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-[40px] font-bold">Shop</h1>
          <p className="text-[15px] text-gray-600">Home / Shop</p>
        </div>
      </div>

      {/* Filters and Product Section */}
      <div className="bg-[#F9F1E7] py-6 px-4 relative top-[58px] w-[1576px] h-[100px]" >
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center gap-2 text-black font-bold">
            <Image src="/Vector (5).png" alt="Filter" width={20} height={20} className="relative ml-[300px]"/>
            Filter
          </button>
          <Image src="/dot.png" alt="Show" width={30} height={30} className="relative ml-40" />
          <Image src="/line.png" alt="Show" width={30} height={30} className="relative right-28" />
          <p className="text-sm font-bold relative right-56">Showing 1–16 of 32 results</p>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold relative right-56">Show</span>
            <Image src="/Group 58.png" alt="Show" width={30} height={30}  className=' relative right-56'/>
            <span className='text-sm font-bold relative right-56'>Sort by</span>
            <Image src="/Group 59.png" alt="Sort" width={120} height={30} className=' relative right-56'/>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative top-28 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-md shadow-sm hover:shadow-md"
            >
              <Image
                src={product.imageSrc}
                alt={product.name}
                width={300}
                height={100}
                className="rounded-md relative left-4"
              />
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-400 font-bold">
                  {product.price}
                </span>
                <span className=" text-gray-400">
                  {product.oldPrice}
                </span>
              </div>
            </div>
            
          ))}
          <Image src='/Frame 72.png' alt='img' width={300} height={300} className='relative ml-[600px] items-center' />



          {/* Filters and Product Section */}
      <div className="bg-[#F9F1E7] py-6 px-4 relative top-[58px] w-[1620px] h-[100px] right-[500px] m-11" >
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center gap-2 text-black font-bold">
            <Image src="/Group.png" alt="Filter" width={20} height={20} className="relative ml-[300px]"/>
            High Quality<br></br><span className="text-[10px] text-gray-400 relative top-8 right-32">crafted from top materials</span>
          </button>
          <Image src="/Group (1).png" alt="Show" width={30} height={30} className="relative right-20" />
          <p className="text-sm font-bold relative right-56 top-4 ml-7">Warranty Protection<br></br><span className="text-[10px] text-gray-400 relative left-2">crafted from top materials</span></p>
          <Image src="/Vector (6).png" alt="Show" width={30} height={30} className="relative right-28" />
         
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold relative right-52">Free Shipping<br></br><span className="text-[10px] text-gray-400 relative right-2">Order over 150 $</span></span>
            <Image src="/Vector (7).png" alt="Show" width={30} height={30} className="relative right-28" />
            <span className="text-sm font-bold relative right-[100px]">24 / 7 Support<br></br><span className="text-[10px] text-gray-400 relative right-2">Dedicated support</span></span>
          
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;