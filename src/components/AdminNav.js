import React from "react";

const AdminNav = () => {
  return (
    <div className="fixed top-4 left-64 right-0 mx-4">
      <div className="w-full bg-gray-700 flex justify-between md:justify-end  p-4">
        <button className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize font-serif">
          logout
        </button>
      </div>
    </div>
  );
};

export default AdminNav;
