import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const Contact = () => {
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
              <Link href="./Blog" className="hover:text-gray-800">
                Blog
              </Link>
            </li>
            <li>
              <Link href="./Contact" className="hover:text-gray-800">
                Contact
              </Link>
            </li>
          </ul>
  
          {/* Icons Section */}
          <div className="flex items-center text-lg text-gray-700 gap-6">
            <FaUserAlt className="cursor-pointer" aria-label="User Profile" />
            <IoSearch className="cursor-pointer" aria-label="Search" />
            <FaRegHeart className="cursor-pointer" aria-label="Wishlist" />
            <Link href='./Cart'><BsCart3 className="cursor-pointer" aria-label="Cart" /></Link>
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
          <div className="items-center relative left-11 ">
            <Image
              src="/icon.png"
              alt="Furniro Logo"
              width={60}
              height={60}
              priority
            /></div>  
          <h1 className="text-[40px] font-bold text-center relative right-3">Contact</h1>
          <p className="text-[15px] text-gray-600">Home / Contact</p>
          </div> </div>
         
          <div className="font-bold text-[30px] text-[#000000] relative top-36 text-center  ">Get In Touch With Us</div>  
          <div className="font-light text-[16px] text-[#9F9F9F] relative top-40 text-center  ">For More Information About Our Product & Services. Please Feel Free To Drop Us<br></br> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</div>  
          
          <FaMapMarkerAlt  className="relative top-80 w-[22px] h-[27px] left-96 "/>
          <div className="text-[20px] text-[#0a0a0a] relative top-[310px] text-center right-[310px] font-bold">Address</div>
          <div className="text-[14px] text-[#0a0a0a] relative top-[315px] text-center right-[275px] font-light">236 5th SE Avenue, New<br></br> <span className="relative right-2">York NY10000, United,</span><br></br> <span className="relative right-14">States</span></div>
          
          <FaPhone  className="relative top-[370px] w-[22px] h-[27px] left-96 "/>
          <div className="text-[20px] text-[#0a0a0a] relative top-[350px] text-center right-[310px] font-bold">Phone</div>
          <div className="text-[14px] text-[#0a0a0a] relative top-[360px] text-center right-[270px] font-light">2Mobile: +(84) 546-6789
        <br></br> <span className="relative right-1"> Hotline: +(84) 456-6789</span><br></br></div>
          
          <FaClock  className="relative top-[420px] w-[22px] h-[27px] left-96 "/>
          <div className="text-[20px] text-[#0a0a0a] relative top-[400px] text-center right-[280px] font-bold">Working Time</div>
          <div className="text-[14px] text-[#0a0a0a] relative top-[410px] text-center right-[260px] font-light">Monday-Friday: 9:00 - 22:00
          <br></br> <span className="">Saturday-Sunday: 9:00 - 21:00</span>
          
          <div className="mb-4 flex flex-col items-center space-y-2">
  {/* Label */}
  <label htmlFor="name" className=" text-[17px] relative bottom-[400px] font-bold left-[540px] ">
    Your Name
    </label>
  
  {/* Input Container */}
  <div className="w-[411px]">
    <input
      type="text"
      id="name"
      name="name"
      placeholder="ABC"
      className=" p-4 border border-gray-300 rounded-md relative bottom-[400px] font-bold left-[690px] w-[411px] h-[60px]"
    />
  </div>
</div>
<div className="mb-4 flex flex-col items-center space-y-2">
  {/* Label */}
  <label htmlFor="name" className=" text-[17px] relative bottom-[400px] font-bold left-[553px] ">
  Email address
    </label>
  
  {/* Input Container */}
  <div className="w-[411px]">
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Abc@def.com"
      className=" p-4 border border-gray-300 rounded-md relative bottom-[400px] font-bold left-[690px] w-[411px] h-[60px]"
    />
  </div>
</div>
<div className="mb-4 flex flex-col items-center space-y-2">
  {/* Label */}
  <label htmlFor="name" className=" text-[17px] relative bottom-[400px] font-bold left-[525px] ">
  Subject
    </label>
  
  {/* Input Container */}
  <div className="w-[411px]">
    <input
      type="text"
      id="name"
      name="name"
      placeholder="This is an optional"
      className=" p-4 border border-gray-300 rounded-md relative bottom-[400px] font-bold left-[690px] w-[411px] h-[60px]"
    />
  </div>
</div>

  
    <div className="mb-4 flex flex-col items-center space-y-2">
  {/* Label */}
  <label htmlFor="message" className="text-[17px] relative bottom-[400px] font-bold left-[551px]">
    Your Message
  </label>
  
  {/* Text Area */}
  <textarea
    id="message"
    name="message"
    placeholder="Type your message here..."
    className="p-4 border border-gray-300 rounded-md relative bottom-[400px] font-bold left-[690px] w-[411px] h-[90px]"
  ></textarea>
</div>
  </div>
  <button className="w-[237px] h-[55px] bg-[#B88E2F] text-white font-bold text-[18px] relative top-[100px] left-[1100px] border-4 border-white">Submit</button>
 
 {/* Filters and Product Section */}
       <div className="bg-[#F9F1E7] py-6 px-4 relative  w-[1622px] h-[200px] right-[90px] m-11 top-[170px] " >
         <div className="flex justify-between items-center mb-6">
           <button className="flex items-center gap-2 text-black font-bold">
             <Image src="/Group.png" alt="Filter" width={40} height={30} className="relative ml-[100px] top-8"/>
            <span className="relative top-8 ml-4 text-[20px]">High Quality</span><br></br><span className="text-[12px] text-gray-400 relative top-14 right-[140px]">crafted from top materials</span>
           </button>
           <Image src="/Group (1).png" alt="Show" width={40} height={40} className="relative right-[20px] top-8" />
           <span className=" font-bold relative right-[80px]  ml-9 text-[20px] top-7">Warranty Protection</span><br></br><span className="text-[12px] text-gray-400 relative right-[360px] top-14">crafted from top materials</span>
           <Image src="/Vector (6).png" alt="Show" width={40} height={40} className="relative right-[170px] top-8" />
          
           <div className="flex items-center gap-4">
             <span className="font-bold relative right-[200px] text-[20px] top-7">Free Shipping</span><br></br><span className="text-[12px] text-gray-400 relative right-[350px] top-14">Order over 150 $</span>
             <Image src="/Vector (7).png" alt="Show" width={40} height={40} className="relative right-[170px] top-8" />
             <span className="font-bold relative right-[170px] text-[20px] top-10">24 / 7 Support<br></br><span className= 'text-[12px] text-gray-400 relative left-[20px] bottom-1'>Dedicated support</span></span>
           
           </div>
         </div>
         </div>
         </div>
       
        );
};

export default Contact
