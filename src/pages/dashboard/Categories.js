import React from "react";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

const categories = () => {
  return (
    <div>
      <div className="mt-5 border-b pb-5">
        <Link
          to="/dashboard/create-category"
          className="px-4 py-2 rounded-md bg-gray-900 text-white font-semibold flex justify-center items-center"
        >
          Add Categories <BiPlus className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default categories;
