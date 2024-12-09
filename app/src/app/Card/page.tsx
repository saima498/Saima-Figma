import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

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
            <BsCart3 className="cursor-pointer" aria-label="Cart" />
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
          <div className="items-center relative ">
            <Image
              src="/icon.png"
              alt="Furniro Logo"
              width={60}
              height={60}
              priority
            />
          <h1 className="text-[40px] font-bold text-center">Card</h1>
          <p className="text-[15px] text-gray-600">Home / Card</p>
        </div>  </div>
        <div className="bg-[#F9F1E7] w-[817px] h-[55px] relative top-36 ml-28">
            <ul className="flex gap-16 relative pt-4 ml-20 font-bold">
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
            </ul>
            <Image src='/soufa.png' alt='img' width={100} height={100} className='ml-12 relative top-14'/>
            <ul className="flex ml-48 relative gap-9 font-bold text-gray-400">
                <li>Asgaard sofa</li>
                <li>Rs. 250,000.00</li>
                <li>1</li>
                <li>Rs. 250,000.00</li>
            </ul>
            {/* Cart Totals */}
      <div className="bg-[#F9F1E7] w-full max-w-md mx-auto mt-6 p-4 rounded-lg relative left-[700px] w-[500px] h-[230px] bottom-[100px]  ">
        <h2 className="font-bold text-lg mb-4">Cart Totals</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Total</span>
          <span className="text-[#B88E2F] font-bold">Rs. 250,000.00</span>
        </div>
        <Link href='./Checkout'><button className="w-full py-2 bg-[#B88E2F] text-white font-bold rounded">
        Check Out  </button></Link>
      
      </div>
    </div>
   
    </div>
      </div>
      
    );
};

export default Navbar