import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";

const CreateCategory = () => {
  return (
    <div>
      <div className="mt-5 border-b pb-5">
        <Link
          to="/dashboard/categories"
          className="px-4 py-2 rounded-md bg-gray-900 text-white font-semibold flex justify-center items-center"
        >
          Category List <AiOutlineUnorderedList className="ml-2" />
        </Link>
      </div>
      <form className="mt-4 md:w-6/12">
        <div className="mb-3">
          <input
            type="text"
            className="w-full text-black outline-none p-3 rounded-md"
            placeholder="Category Name..."
            name="category"
          />
        </div>
        <input
          type="submit"
          value="create category"
          className="bg-indigo-500 text-white font-semibold uppercase px-4 py-2 rounded-md"
        />
      </form>
    </div>
  );
};

export default CreateCategory;
