import MainLayout from "../Layout/MainLayout/MainLayout";
import AdminLogin from "../pages/Auth/AdminLogin";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
        {
            path:'/admin-login',
            element:<AdminLogin/>
        }
    ]
  }
]);