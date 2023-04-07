import React from "react";
import Sidebar from "../../components/Sidebar";
import AdminNav from "../../components/AdminNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Sidebar></Sidebar>
      <AdminNav></AdminNav>
      <section className="ml-64 bg-gray-900 min-h-screen pt-24 px-4">
        <div className="bg-gray-800 text-white px-4 py-6">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
