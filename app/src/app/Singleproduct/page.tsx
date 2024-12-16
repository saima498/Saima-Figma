import React from 'react'

import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
const products = [
  {
    id: 1,
    name: "Grifo",
    description: "Night lamp",
    imageSrc: "/image 1.png",
    price: "Rp 1.500.000",
    oldPrice: " ",
    link: "./Singleproduct",
  },
  {
    id: 2,
    name: "Muggo",
    description: "Small mug",
    imageSrc: "/image 1.png",
    price: "Rp 150.000",
    oldPrice: " ",
    link: "./Singleproduct",
  },
  {
    id: 3,
    name: "Pingky",
    description: "Cute bed set",
    imageSrc: "/image 3.png",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    link: "./Singleproduct",
  },
  {
    id: 4,
    name: "Potty",
    description: "Minimalist flower",
    imageSrc: "/images.png",
    price: "Rp 500.000",
    oldPrice: " ",
    link: "./Singleproduct",
  },
];
const page = () => {
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
<div className='flex'>
      <div className="bg-[#F9F1E7] w-[1589px] h-[70px] relative top-[67px] ">
            <Image src='/Vector (4).png' alt='img' width={7} height={10}  className='ml-12 relative top-11'/>
            <div className='ml-16 relative top-7 font-bold '>Home</div>
      </div>
      <div className="bg-[#F9F1E7] w-[1589px] h-[70px] relative top-[67px] ">
            <Image src='/Vector (4).png' alt='img' width={7} height={10}  className='right-[600px] relative top-11'/>
            <div className=' relative top-7 font-bold right-[580px] '>Shop</div>
            <div className=' relative top-1 font-bold right-[580px] ml-32'>Asgaard sofa</div>
            <Image src='/Group 94.png' alt='img' width={80} height={70} className='relative top-14 right-[700px]'/>
            <Image src='/Group 98.png' alt='img' width={80} height={70} className='relative top-14 right-[700px] pt-8'/>
            <Image src='/Group 97.png' alt='img' width={80} height={70} className='relative top-14 right-[700px] pt-8'/>
            <Image src='/Group 96.png' alt='img' width={80} height={70} className='relative top-14 right-[700px] pt-8'/>
            </div>  </div>
            <div className='bg-[#F9F1E7] container w-[390px] h-[430px] relative items-center top-32 left-56 border-none'> 
        <Image src='/Group 95.png' alt='img' width={481} height={391} className=' relative items-center top-6 '/>
        <div className='relative bottom-96 left-[500px] text-center font-bold text-[40px] '>Asgaard sofa</div>
        <div className='relative bottom-96 left-[440px] text-center font-bold text-[20px] text-[#9F9F9F]'>Rs. 250,000.00</div>
        <Image src='/Group 88.png ' alt='img' width={109} height={ 100} className='relative bottom-[380px] left-[570px] text-center text-[20px]'/>
        <div  className='relative bottom-[400px] left-[570px] text-center text-[15px] text-[#9F9F9F]'> 5 Customer Review</div>
        <p className='relative bottom-96 left-[569px] font-light text-[15px] text-black'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
        <div className='relative bottom-[330px] left-[400px] text-center font-light text-[20px] text-[#9F9F9F] '>Size</div>
        <div className='bg-[#F9F1E7]  hover:bg-[#B88E2F] container rounded-lg w-[70px] h-[60px] relative items-center bottom-[300px] left-[570px] border-none '>
        <div className='text-black font-bold text-center relative top-4 text-[20px]'>L</div>
        </div>
        <div className='bg-[#F9F1E7]  hover:bg-[#B88E2F] container rounded-lg w-[70px] h-[60px] relative items-center bottom-[360px] left-[660px] border-none '>
        <div className='text-black font-bold text-center relative top-4 text-[20px]'>XL</div>
        </div>
        <div className='bg-[#F9F1E7]  hover:bg-[#B88E2F] container rounded-lg w-[70px] h-[60px] relative items-center bottom-[420px] left-[750px] border-none '>
        <div className='text-black font-bold text-center relative top-4 text-[20px]'>X5</div>
        </div>
        </div>
        <div className='relative top-[200px] text-center font-light text-[20px] text-[#9F9F9F] ml-16'>Color</div>
        <div className='bg-[#816DFA] container relative items-center top-[220px] left-[790px] border-none w-12 h-12 rounded-full flex'>
  
        </div>
        <div className=' bg-[#000000] container relative items-center top-[170px] left-[790px] border-none w-12 h-12 rounded-full ml-16'>
        
        </div>
        <div className='bg-[#B88E2F] container relative items-center top-[122px] left-[790px] border-none w-12 h-12 rounded-full ml-32'>
         
        <Link href='./Card'><button className="w-[200px]  h-[50px] hover:bg-[#B88E2F] border-2 text-black font-bold rounded-lg relative top-36 text-center right-56 text-[20px]">
        Add To Cart </button></Link>
        <button className="w-[200px]  h-[50px] hover:bg-[#B88E2F] border-2 text-black font-bold rounded-lg relative top-[94px] text-center ml-3 text-[20px]">
        Compare </button>
          <div>
            <ul className='text-[#9F9F9F] font-bold text-[16px] relative top-52 leading-8 right-[190px]'>
              <li>SKU</li>
              <li>Category</li>
              <li>Tags</li>
              <li>Share</li>
            </ul>
            <ul className='text-[#9F9F9F] font-bold text-[16px] relative top-[90px] leading-8 right-16 text-center'>
              <li>:</li>
              <li>:</li>
              <li>:</li>
              <li>:</li>
            </ul>
            <ul className='text-[#9F9F9F] font-bold text-[16px] relative bottom-[40px] leading-8 ml-11 text-center'>
              <li>SS001</li>
              <li>Sofas</li>
              <li className='w-[178px] relative right-1'>Sofa Chair Home Shop</li>
              <li><FaFacebook  className='text-black w-[120px] right-14 relative top-4'/> <FaLinkedin className='text-black w-[180px] right-12 relative' /> <FaTwitterSquare className='text-black w-[260px] right-14 relative bottom-4' /></li>
            </ul>
            <div>
            <ul className="'flex w-[80px] h-[20px] text-center relative top-24 text-[25px] right-80  flex">
  <span className="font-bold left-32 flex w-40">Description </span> <span className=" w-[200px] flex">Additional Information</span> 
  <span className='w-28 flex'>Reviews [5]</span>
</ul></div>
<p className='text-[#9F9F9F] w-[1070px] h-[48px] relative right-[700px] top-48'>Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
<p className='text-[#9F9F9F] w-[1070px] h-[48px] relative right-[700px] top-60'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
</div>
<Image src='/Group 109.png' alt="img" width={1300} height={700} className="relative right-[700px] top-[370px] h-[380px] max-w-6xl" />



</div>
    

{/* //Related product// */}
  
     <div className="relative text-center font-bold text-[30px] w-72 top-[1500px] ml-[600px]">Related Products</div>     
       
       <div className='flex relative top-[1500px] '>
     <div className="w-full flex flex-col items-center py-8 ">
      <div className="flex flex-wrap justify-center gap-6 w-[80%]">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[290px] h-[500px] bg-slate-100 flex flex-col items-center p-4 rounded-lg shadow-md relative group"
          >
            {/* Wrap Image component inside Link */}
            <Link href={product.link}>
             
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={1200}
                  height={500}
                  className="mb-4 object-cover rounded-lg cursor-pointer"
                  layout="responsive"
                />
           
            </Link>

            {/* 30% off */}
            <div className="relative bottom-60 left-12 bg-red-500 text-white font-bold text-lg px-4 py-2 rounded-full w-[65px] h-[70px]">
    30% <br></br>OFF
  </div>
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
         <button className='relative border-4 top-12 text-[#B88E2F] border-[#B88E2F] w-[190px] h-[40px]'>Show More</button>
      
</div>       
</div></div></div>  
  )
}

export default page
