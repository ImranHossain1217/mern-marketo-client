import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../Layout/MainLayout/MainLayout";
import AdminLogin from "../pages/Auth/AdminLogin";
import PrivateRoute from "./Private/PrivateRoute";

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
  },
]);
