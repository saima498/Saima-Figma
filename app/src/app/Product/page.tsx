"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";
import Footer from '../../components/Footer';

const sanity = sanityClient({
  projectId: "48pyb9au",
  dataset: "production",
  apiVersion: "2024-01-30",
  useCdn: true, // Make sure we get fresh data
  token: process.env.SANITY_API_TOKEN, // Ensure your token is set up correctly
});

interface Product {
  slug: { current: string };
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [product, setProducts] = useState<Product[]>([]); // For storing all products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // For storing filtered products
  const [searchQuery, setSearchQuery] = useState<string>(""); // For storing search input

  // Fetch products from Sanity CMS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          *[_type == "product"] {
            _id,
            title,
            price,
            description,
            discountPercentage,
            "imageUrl": productImage.asset->url, 
            "slug": slug
          }
        `;
        const data = await sanity.fetch(query);
        setProducts(data); // Set all fetched products
        setFilteredProducts(data); // Initially, display all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // Update search query as the user types
  };

  // Handle search functionality when the search icon is clicked
  const handleSearchClick = () => {
    if (searchQuery.trim() !== "") {
      // Filter products based on search query (matching title, description, or tags)
      const filtered = product.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags?.some(tag => typeof tag === 'string' && tag.toLowerCase().includes(searchQuery.toLowerCase()))

      );
      setFilteredProducts(filtered); // Update filtered products
    } else {
      // If no search query, show all products
      setFilteredProducts(product);
    }
  };

  // Handle add to cart functionality (this can be extended with context, localStorage, etc.)
  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product);
    // Logic to add the product to a cart (use Context, Redux, or localStorage for state management)
  };

  return (
    <div className="p-4">
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
{/* Navigation Links for Desktop */}
<ul className="hidden md:flex gap-8 text-gray-500 text-sm">
            <Link href="/">
              <li className="cursor-pointer hover:text-black">Home</li>
            </Link>
            <Link href="/Product">
              <li className="cursor-pointer hover:text-black">Product</li>
            </Link>
            <Link href="/Blog">
              <li className="cursor-pointer hover:text-black">Blog</li>
            </Link>
            <Link href="/Contact">
              <li className="cursor-pointer hover:text-black">Contact</li>
            </Link>
          </ul>
        {/* Search Bar & Icons Section */}
        <div className="flex items-center gap-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 border rounded-md"
            placeholder="Search products..."
          />
          <IoSearch
            className="cursor-pointer"
            aria-label="Search"
            onClick={handleSearchClick} // Trigger the search on click
          />
          <FaUserAlt className="cursor-pointer" aria-label="User Profile" />
          <FaRegHeart className="cursor-pointer" aria-label="Wishlist" />
          <Link href="./Cart">
            <BsCart3 className="cursor-pointer" aria-label="Cart" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full relative top-[50px]">
        <Image
          src="/Rectangle1.png"
          alt="Home background"
          width={1590}
          height={1008}
          layout="responsive"
          priority
        />
        <div className="absolute top-1/2 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-center text-slate-800 mt-4 mb-2 text-[40px] font-bold">
            Our Latest Product
          </h2>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative top-14">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={product.slug?.current ? `./Product/${product.slug.current}` : '#'}>
                <Image
                  src={product.imageUrl || "https://via.placeholder.com/300"}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md"
                />
              </Link>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-slate-600 mt-2 text-sm">
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + "..."
                    : product.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-slate-600 font-bold">${product.price.toFixed(2)}</p>
                    {product.discountPercentage > 0 && (
                      <p className="text-sm text-green-600">
                        {product.discountPercentage}% OFF
                      </p>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button placed below price */}
                <div className="mt-4">
                  <Link href="./Cart"
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors"
                  >
                    Add to Cart
                  </Link>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {product.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-300 text-black px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  )) || []}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found matching your search.
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="relative top-[800px]">
        <Footer />
      </div>
    </div>
  );
};

export default ProductCards;

