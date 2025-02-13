"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { FaUserAlt, FaStar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";
import Footer from "@/components/Footer";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string | null;
}

// Function to fetch product data from Sanity
async function getProduct(slug: string): Promise<Product | null> {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      title,
      price,
      description,
      "imageUrl": productImage.asset->url
    }`,
    { slug }
  );

  return product || null;
}

// Product page component
export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct = await getProduct(params.slug);
      console.log(fetchedProduct); // Ye line add karein!
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, [params.slug]);

  // Handle the case where the product is not found
  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <p>Sorry, we couldn find the product you looking for.</p>
      </div>
    );
  }

  // Handle Add to Cart functionality
  const handleAddToCart = (product: Product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Product added to cart!");
  };

  return (
    <div className="p-4">
      {/* Navbar Section */}
      <nav className="bg-white w-full h-16 flex items-center justify-between px-6 shadow-md fixed top-0 z-10">
        <div className="flex items-center">
          <Image
            src="/icon.png"
            alt="Furniro Logo"
            width={60}
            height={60}
            priority
          />
          <div className="text-2xl font-bold ml-4">Furniro</div>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-500 text-sm font-medium">
          <Link href="./Product">
            <li className="cursor-pointer hover:text-black">Product</li>
          </Link>
          
          <li>
            <Link href="./Contact" className="hover:text-gray-800">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center text-lg text-gray-700 gap-6">
          <FaUserAlt
            className="cursor-pointer hover:text-blue-500 transition-colors"
            aria-label="User Profile"
          />
          <IoSearch
            className="cursor-pointer hover:text-blue-500 transition-colors"
            aria-label="Search"
          />
          <FaRegHeart
            className="cursor-pointer hover:text-blue-500 transition-colors"
            aria-label="Wishlist"
          />
          <Link href="/Cart">
            <BsCart3 className="cursor-pointer" aria-label="Cart" />
          </Link>
        </div>
      </nav>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 mt-24">
        {/* Product Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-auto">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.title || "Product Image"}
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            ) : (
              <div className="bg-gray-200 flex items-center justify-center rounded-lg h-full">
                <span className="text-gray-600 font-semibold">
                  No Image Available
                </span>
              </div>
            )}
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col justify-between gap-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
              {product.title || "Untitled Product"}
            </h1>
            {product.price ? (
              <p className="text-3xl text-gray-700">${product.price}</p>
            ) : (
              <p className="text-xl text-gray-700">Price not available</p>
            )}

            {/* Customer Reviews */}
            <div className="flex items-center text-gray-500 text-sm mt-4">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className="text-yellow-400 bottom-5  relative"
                />
              ))}
              <span className="right-16 relative">5 Customer Reviews</span>
            </div>

            <p className="text-lg text-gray-600 mt-4">
              {product.description || "Description not available"}
            </p>

            {/* Size Selector */}
            <div className="flex space-x-4 justify-start mb-4">
              <div className="bg-[#F9F1E7] hover:bg-[#e6b646] container rounded-lg w-[70px] h-[60px] flex justify-center items-center text-black font-bold text-lg">
                L
              </div>
              <div className="bg-[#F9F1E7] hover:bg-[#e6b646] container rounded-lg w-[70px] h-[60px] flex justify-center items-center text-black font-bold text-lg">
                XL
              </div>
              <div className="bg-[#F9F1E7] hover:bg-[#e6b646] container rounded-lg w-[70px] h-[60px] flex justify-center items-center text-black font-bold text-lg">
                X5
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-4">
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative mt-20">
        <Footer />
      </div>
    </div>
  );
}



