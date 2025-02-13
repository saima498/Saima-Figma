import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-44">
      {/* Logo Section */}
      <div className="ml-28">
        <h1 className="text-[30px] font-bold">Funiro.</h1>
        <p className="text-[#9F9F9F] text-[18px] mt-24 leading-7">
          400 University Drive Suite 200 Coral <br />
          Gables, FL 33134 USA
        </p>
      </div>

      {/* Links Section */}
      <div className="flex mt-16 ml-28">
        {/* Links */}
        <div className="ml-[400px] relative bottom-[280px] leading-[70px]">
          <h3 className="text-[#9F9F9F] font-bold mb-4">Link</h3>
          <ul className="font-bold space-y-2">
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help */}
        <div className="ml-[170px] relative bottom-[280px] leading-[70px]">
          <h3 className="text-[#9F9F9F] font-bold mb-4">Help</h3>
          <ul className="font-bold space-y-2">
            <li>Payment Option</li>
            <li>Return</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="ml-[200px] relative bottom-[260px]">
          <h3 className="text-[#9F9F9F] font-bold mb-4 ">Newsletter</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[240px] p-2 border-b-2 border-gray-400 focus:outline-none focus:border-black"
          />
          <button className="block mt-4 font-bold text-[18px] text-black relative bottom-[40px] left-[260px] ml-11 underline">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-[#D9D9D9] mt-16 relative bottom-[200px]"></div>

      {/* Copyright */}
      <div className="text-center text-[#252525] relative bottom-[170px] right-[600px]">
        2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;