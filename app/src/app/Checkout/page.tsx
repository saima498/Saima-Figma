"use client";

import React, { useEffect, useState } from "react";
import { getCartItems } from "../action/actio";
import { Product } from "../../../types/products";
import Link from "next/link";
import Image from "next/image";
import { CgChevronRight } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";


const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formErrors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });
  useEffect(() => {
    const product = getCartItems() || [];
    console.log("Fetched cart items:", product);
    setCartItems(product);
  }, []);

  const subTotal = cartItems.reduce((total, product) => {
    const price =
      typeof product.price === "number" && !isNaN(product.price)
        ? product.price
        : 0;
    const quantity = product.stockLevel || 1;
    return total + price * quantity;
  }, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setErrors(errors);
    return !Object.values(errors).some((val) => val === true);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      alert("Order placed successfully! 🎉");
    } else {
      alert("Please fill in all required fields.");
    }
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
              Product
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

      <div className="min-h-screen bg-gray-50">
        <div className="mt-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 py-9 hover:text-yellow-700">
              <Link href="/Cart" prefetch={false}>
                Cart
              </Link>

              <CgChevronRight />
              <span>Checkout</span>
            </nav>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white border rounded-lg p-6 space-y-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              {cartItems.length > 0 ? (
                cartItems.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center gap-4 py-3 border-b"
                  >
                    <div className="w-16 h-16 rounded overflow-hidden">
                      {product.imageUrl ? (
                        <Image
                          src={
                            product.imageUrl ||
                            "https://via.placeholder.com/300"
                          }
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
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{product.title}</h3>
                      <p className="text-xs text-gray-500">
                        Quantity: {product.stockLevel}
                      </p>
                    </div>
                    <p>
                      $
                      {(
                        Number(product.price) * (product.stockLevel || 1)
                      ).toFixed(2)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-xs font-medium">No items in cart</p>
              )}

              <div className="text-right pt-4">
                <p className="text-sm">
                  Subtotal:{" "}
                  <span className="font-medium">${subTotal.toFixed(2)}</span>
                </p>
                <p className="text-sm">
                  Discount:{" "}
                  <span className="font-medium">${discount.toFixed(2)}</span>
                </p>
                <p className="text-lg font-semibold">
                  Total: ${(subTotal - discount).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Billing Information */}
            <div className="bg-white border rounded-lg p-6 space-y-6">
              <h2 className="text-xl font-semibold">Billing Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "firstName", label: "First Name" },
                  { id: "lastName", label: "Last Name" },
                  { id: "address", label: "Address" },
                  { id: "email", label: "Email" },
                  { id: "phone", label: "Phone Number" },
                  { id: "zipCode", label: "Zip Code" },
                  { id: "city", label: "City" },
                ].map(({ id, label }) => (
                  <div key={id}>
                    <label htmlFor={id} className="sr-only">
                      {label}
                    </label>
                    <input
                      type="text"
                      id={id}
                      placeholder={`Enter Your ${label}`}
                      value={formValues[id as keyof typeof formValues]}
                      onChange={handleInputChange}
                      className="border w-full px-2 py-1 rounded"
                      aria-invalid={formErrors[id as keyof typeof formErrors]}
                      aria-describedby={`${id}-error`}
                    />
                    {formErrors[id as keyof typeof formErrors] && (
                      <p id={`${id}-error`} className="text-sm text-red-900">
                        {label} is required
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <button
                className="w-full h-12 bg-yellow-500 hover:bg-yellow-800 text-white font-semibold rounded"
                onClick={handlePlaceOrder}
                disabled={cartItems.length === 0} // Disable button if no items in cart
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
