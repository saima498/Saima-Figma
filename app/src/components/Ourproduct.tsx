

'use client';

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

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

const OurProduct: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await client.fetch(`
          *[_type == "product" && Ourproduct == true]{
            _id,
            title,
            price,
            "imageUrl": productImage.asset->url, 
            slug,
            tags
          }[0..7]
        `);

        if (products.length > 0) {
          setFilteredProducts(products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle add to cart
  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product.title);
    // Implement cart logic here (e.g., add product to cart state)
  };

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-10 bottom-[700px] relative">
      <h1 className="text-[30px] sm:text-[40px] md:text-[40px] font-bold text-center mb-8">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={product.slug?.current ? `/Product/${product.slug.current}` : "#"}>
                <Image
                  src={product.imageUrl || "https://via.placeholder.com/300"}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md"
                />
              </Link>

              {/* Product Title */}
              <h2 className="mt-4 text-lg font-semibold">{product.title}</h2>

              {/* Product Price */}
              <p className="text-gray-700 font-medium">${product.price}</p>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProduct;
