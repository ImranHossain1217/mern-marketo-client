import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../Layout/MainLayout/MainLayout";
import AdminLogin from "../pages/Auth/AdminLogin";
import PrivateRoute from "./Private/PrivateRoute";
import Categories from "../pages/dashboard/Categories.js";
import CreateCategory from "../pages/dashboard/CreateCategory";
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/admin-login",
        element: <AdminLogin />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/categories",
        element: (
          <PrivateRoute>
            <Categories />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/create-category",
        element: (
          <PrivateRoute>
            <CreateCategory />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
