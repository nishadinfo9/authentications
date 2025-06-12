import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import authServices from "../../appwrite/auth";
import { logout } from "../../redux/features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.status);
  console.log(isAuthenticated);

const logoutHandler = async () => {
  try {
    await authServices.logout(); // Even if no session exists, just try to log out
    dispatch(logout());
    navigate("/login");
  } catch (error) {
    console.log(error.message);
  }
};


  return (
    <nav className="hidden md:flex space-x-6 items-center">
      {isAuthenticated ? (
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-10">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </div>
          <button
            onClick={logoutHandler}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50"
          >
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
