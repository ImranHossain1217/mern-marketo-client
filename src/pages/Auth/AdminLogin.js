import React, { useEffect } from "react";
import { useAdminLoginMutation } from "../../redux/features/auth/authService";
import { useNavigate } from "react-router-dom";
import { setAdminToken } from "../../redux/features/auth/authReducer";
import { useDispatch } from "react-redux";

const AdminLogin = () => {
  const [login, response] = useAdminLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = {
      email,
      password,
    };
    login(user);
  };

  useEffect(() => {
    if (response?.isSuccess) {
      localStorage.setItem("admin-token", response?.data?.token);
      navigate("/dashboard");
      dispatch(setAdminToken(response?.data?.token));
    }
  }, [response?.isSuccess]);

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <form
        onSubmit={handleAdminLogin}
        className="bg-white p-5 w-11/12 md:w-8/12 lg:w-4/12 shadow-md rounded-md"
      >
        <h3 className="text-black font-semibold text-xl uppercase mb-3">
          dashboard login
        </h3>
        {errors.length > 0 &&
          errors.map((error, i) => (
            <div className="mb-3" key={i}>
              <p className="p-3 bg-red-100 text-red-600 rounded">{error.msg}</p>
            </div>
          ))}
        <div className="mb-3">
          <input
            type="email"
            className="w-full bg-indigo-100 outline-none p-3 rounded-md"
            placeholder="Enter Email..."
            name="email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="w-full bg-indigo-100 outline-none p-3 rounded-md"
            placeholder="Enter Password..."
            name="password"
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
