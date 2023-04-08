import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { adminLogout } from "../redux/features/auth/authReducer";

const AdminNav = ({ openSideNav }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed top-4 left-0 md:left-64 right-0 mx-4">
      <div className="w-full bg-gray-700 flex justify-between md:justify-end  p-4">
        <AiOutlineMenu
          onClick={openSideNav}
          className="text-3xl text-white cursor-pointer md:hidden block"
        />
        <button
          onClick={() => dispatch(adminLogout())}
          className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize font-serif"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default AdminNav;
