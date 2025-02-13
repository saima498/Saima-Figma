
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserAlt, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

// Sample product data for "Our Products" and "Trending Products"
const ourProducts = [
  { id: 1, name: "Dining Table", slug: "dining-table" },
  { id: 2, name: "Sofa Set", slug: "sofa-set" },
  { id: 3, name: "Bed Frame", slug: "bed-frame" },
  { id: 4, name: "Office Chair", slug: "office-chair" },
  { id: 5, name: "Coffee Table", slug: "coffee-table" },
];

const trendingProducts = [
  { id: 6, name: "Smart TV", slug: "smart-tv" },
  { id: 7, name: "Gaming Chair", slug: "gaming-chair" },
  { id: 8, name: "Laptop Stand", slug: "laptop-stand" },
  { id: 9, name: "Bluetooth Speaker", slug: "bluetooth-speaker" },
  { id: 10, name: "Coffee Mug", slug: "coffee-mug" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  // Function to handle the search
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setFilteredProducts([]);
    } else {
      // Filter products from both OurProduct and TrendingProduct categories
      const filtered = [
        ...ourProducts.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        ),
        ...trendingProducts.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        ),
      ];
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      {/* Background Image */}
      <div className="relative w-full h-[70vh] md:h-[60vh] lg:h-[700px]">
        <Image
          src="/home.png"
          alt="Home background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Navbar Section */}
      <header className="bg-white fixed top-0 w-full z-20 shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image src="/icon.png" alt="Furniro Logo" width={40} height={40} priority />
            <div className="text-lg sm:text-2xl font-bold ml-2">Furniro</div>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              className="px-4 py-2 border border-gray-300 rounded-full w-64 sm:w-80 md:w-96"
            />
            <IoSearch className="absolute right-2 text-gray-500" aria-label="Search" />
            {searchQuery && filteredProducts.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md mt-1 rounded-lg">
                <ul className="max-h-60 overflow-y-auto">
                  
                  {filteredProducts.map((product) => (
                    
                    <li key={product.id} className="p-2 cursor-pointer hover:bg-gray-200">
                     <Link href={`/product/${product.slug}`}>
  {product.title}
</Link>

                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Navigation Links for Desktop */}
          <ul className="hidden md:flex gap-8 text-gray-500 text-sm">
            <Link href="/">
              <li className="cursor-pointer hover:text-black">Home</li>
            </Link>
            <Link href="/Product">
              <li className="cursor-pointer hover:text-black">Product</li>
            </Link>
            <Link href="/Contact">
              <li className="cursor-pointer hover:text-black">Contact</li>
            </Link>
          </ul>

          {/* Icons */}
          <div className="hidden md:flex items-center text-lg text-gray-700 gap-4">
            <FaUserAlt className="cursor-pointer hover:text-black" aria-label="User Account" />
            <FaRegHeart className="cursor-pointer hover:text-black" aria-label="Wishlist" />
            <Link href="/Cart">
              <BsCart3 className="cursor-pointer hover:text-black" aria-label="Cart" />
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden text-lg text-gray-700">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col gap-4 text-gray-500 text-sm p-4">
              <Link href="/">
                <li className="cursor-pointer hover:text-black">Home</li>
              </Link>
              <Link href="/Shop">
                <li className="cursor-pointer hover:text-black">Shop</li>
              </Link>
              <Link href="/blog">
                <li className="cursor-pointer hover:text-black">Blog</li>
              </Link>
              <Link href="/Product">
                <li className="cursor-pointer hover:text-black">Product</li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer hover:text-black">Contact</li>
              </Link>
            </ul>
            <div className="flex items-center justify-evenly text-lg text-gray-700 gap-4 p-4">
              <FaUserAlt className="cursor-pointer hover:text-black" aria-label="User Account" />
              <FaRegHeart className="cursor-pointer hover:text-black" aria-label="Wishlist" />
              <Link href="/Cart">
                <BsCart3 className="cursor-pointer hover:text-black" aria-label="Cart" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative mt-[30vh] md:mt-[20vh] lg:mt-[500px] px-4 lg:px-0 bottom-[900px]">
        <div className="container flex flex-col lg:flex-row bg-[#FFF3E3] lg:w-[600px] lg:h-[360px] mx-auto rounded-lg shadow-md">
          <div className="p-6 lg:pl-8">
            <h3 className="text-black text-lg lg:text-xl font-light">New Arrival</h3>
            <h1 className="text-[#B88E2F] text-2xl lg:text-4xl font-bold leading-tight mt-4">
              Discover Our<br />
              <span>New Collection</span>
            </h1>
            <p className="text-black text-sm lg:text-base mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut<br />
              elit tellus luctus nec ullamcorper mattis.
            </p>
            <div className="mt-6">
              <button className="bg-[#B88E2F] text-white text-lg lg:text-xl px-6 py-3 rounded-md hover:bg-[#A27825] transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
