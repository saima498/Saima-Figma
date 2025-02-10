"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import {getCartItems,removeFromCart,updateCartQuntity,} from "../action/action";
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { images } from "../../../next.config";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result: { isConfirmed: unknown }) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuntity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const item = cartItems.find((item) => item._id === id);
    if (item) handleQuantityChange(id, item.stockLevel + 1);
  };

  const handleDecrement = (id: string) => {
    const item = cartItems.find((item) => item._id === id);
    if (item && item.stockLevel > 1)
      handleQuantityChange(id, item.stockLevel - 1);
  };

  const calculateTotal = () => {
    // Check if images is an array and not empty
    if (Array.isArray(images) && images.length > 0) {
      return images.reduce((total, image) => total + image.price, 0);
    }
    return 0; // Default return 0 if images array is empty or not defined
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!", // ✅ Fixed
    }).then((result: { isConfirmed: unknown }) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your order has been successfully processed",
          "success"
        );
        router.push("./Checkout");
        setCartItems([]);
      }
    });
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

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-500 text-sm font-medium">
          <li>
            <Link href="./" className="hover:text-gray-800">
              Products
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
          <Link href="./Cart">
            <BsCart3 className="cursor-pointer" aria-label="Cart" />
          </Link>
        </div>
      </nav>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
              >
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl} // ✅ Fixed
                    alt={item.title || "Product Image"} // ✅ Fixed
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <p>No Image</p>
                )}

                <div className="flex-1 ml-4">
                  <h2 className="font-semibold text-lg">
                    {item.title ?? "No Title"}
                  </h2>{" "}
                  {/* Default title */}
                  <p className="text-sm text-gray-600">
                    {isNaN(Number(item.price))
                      ? "Invalid price"
                      : Number(item.price).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded relative right-9"
                  >
                    -
                  </button>
                  <span className="relative right-9">{item.stockLevel}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded relative right-9"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex flex-col md:flex-row justify-between items-center mt-6">
              <p className="text-xl font-semibold">
                Total:
                <span className="text-green-600">
                  $
                  {isNaN(calculateTotal())
                    ? "0.00"
                    : calculateTotal().toFixed(2)}
                </span>
              </p>
            </div>

            <button
              onClick={handleProceed}
              className="px-6 py-3 mt-4 md:mt-0 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700"
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>{" "}
    </div>
  );
};

export default CartPage;
