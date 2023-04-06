import React from "react";

const AdminLogin = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <form className="bg-white p-5 w-11/12 md:w-8/12 lg:w-4/12 shadow-md rounded-md">
        <h3 className="text-black font-semibold text-xl uppercase mb-3">
          dashboard login
        </h3>
        <div className="mb-3">
          <input
            type="email"
            className="w-full bg-indigo-100 outline-none p-3 rounded-md"
            placeholder="Enter Email..."
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="w-full bg-indigo-100 outline-none p-3 rounded-md"
            placeholder="Enter Password..."
          />
        </div>
        <div className="mb-3">
          <input
            type="submit"
            value="Login"
            className="w-full bg-indigo-500 outline-none text-white font-semibold p-3 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
