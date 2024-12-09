import React from "react";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
     
      {/* Background Image */}
      <Image src="/home.png" alt="Home background" width={1590} height={1008} priority />
    
      {/* Navbar Section */}
      <div className="relative bottom-[780px]">
        <div className="bg-white container mx-auto w-full h-16 flex items-center justify-between px-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image src="/icon.png" alt="Furniro Logo" width={60} height={60} priority />
            <div className="text-[40px] font-bold ml-4">Furniro</div>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-24 text-gray-500 text-sm ">
            <Link href="/"><li className="cursor-pointer">Home</li></Link>
            <Link href="./Shop"><li className="cursor-pointer">Shop</li></Link>
            <Link href="./blog"><li className="cursor-pointer">Blog</li></Link>
            <Link href="./contact"><li className="cursor-pointer">Contact</li></Link>
          </ul>

          {/* Icons */}
          <div className="flex items-center text-lg text-gray-700 gap-14">
            <FaUserAlt className="cursor-pointer" />
            <IoSearch className="cursor-pointer" />
            <FaRegHeart className="cursor-pointer" />
            <Link href='./Card'><BsCart3 className="cursor-pointer" /></Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="pt-32">
        <div className="container mx-auto flex bg-[#FFF3E3] w-[600px] h-[400px] mt-20 mr-[100px] ">
          <div className="ml-8 mt-16">
            <h3 className="text-black text-xl font-light">New Arrival</h3>
            <h1 className="text-[#B88E2F] text-[50px] font-bold leading-tight">
              Discover Our<br />
              <span>New Collection</span>
            </h1>
            <p className="text-black text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br />
              elit tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="pt-9"> 
           <button className="bg-[#B88E2F] text-white text-[30px] w-[222px] h-[74px]">Buy Now </button>
          </div></div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;                                                                                                                   