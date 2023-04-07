import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import AdminNav from "../../components/AdminNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [side, setSide] = useState("-left-64");
  const openSideNav = () => {
    setSide("left-0");
  };
  const closeSideNav = () => {
    setSide("-left-64");
  };
  return (
    <div className="bg-gray-100 h-screen">
      <Sidebar side={side} closeSideNav={closeSideNav}></Sidebar>
      <AdminNav openSideNav={openSideNav}></AdminNav>
      <section className="ml-0 md:ml-64 bg-gray-900 min-h-screen pt-24 px-4">
        <div className="bg-gray-800 text-white px-4 py-6">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
