import React from "react";
import { FaProductHunt } from "react-icons/fa";
import { BsBagCheck, BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ side, closeSideNav }) => {
  return (
    <div
      className={`bg-gray-800 h-screen w-64 fixed top-0 ${side} md:left-0 z-10 transition-all`}
    >
      <AiOutlineClose
        onClick={closeSideNav}
        className="absolute top-4 right-4 text-2xl cursor-pointer md:hidden block"
      />
      <div className="p-5 bg-gray-200">
        <img src="/logo.png" alt="logo" />
      </div>
      <ul className="mt-4">
        <li className="px-4 py-3 cursor-pointer text-white flex items-center hover:bg-gray-600 transition-all font-serif">
          <FaProductHunt className="mr-2 inline-block" />{" "}
          <Link to="/dashboard/products" className="capitalize text-base">
            products
          </Link>
        </li>
        <li className="px-4 py-3 cursor-pointer text-white flex items-center hover:bg-gray-600 transition-all font-serif">
          <BsBagCheck className="mr-2 inline-block" />{" "}
          <Link to="/dashboard/products" className="capitalize text-base">
            orders
          </Link>
        </li>
        <li className="px-4 py-3 cursor-pointer text-white flex items-center hover:bg-gray-600 transition-all font-serif">
          <BsPeopleFill className="mr-2 inline-block" />{" "}
          <Link to="/dashboard/products" className="capitalize text-base">
            customers
          </Link>
        </li>
        <li className="px-4 py-3 cursor-pointer text-white flex items-center hover:bg-gray-600 transition-all font-serif">
          <BsPeopleFill className="mr-2 inline-block" />{" "}
          <Link to="/dashboard/categories" className="capitalize text-base">
            Add Categories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
