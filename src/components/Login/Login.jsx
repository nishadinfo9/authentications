import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../reuseable/Input";
import Button from "../reuseable/Button";
import { useForm } from "react-hook-form";
import { authServices } from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/authSlice";

const Login = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmited = async (data) => {
    setError("");
    try {
      const session = await authServices.login(data);
      console.log("login session", session);

      if (session) {
        const userData = await authServices.getCurrentUser();
        console.log("currentUser", userData);

        if (userData) {
          dispatch(login({ userData }));
          navigate("/");
        }
      }
    } catch (error) {
      if (error.message.includes("Rate limit")) {
        setError(
          "Too many login attempts. Please wait a minute and try again."
        );
      } else {
        setError(
          error.message || "Login failed. Please check your credentials."
        );
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        {/* error display */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmited)} className="space-y-5">
          <Input
            type={"email"}
            placeholder={"Email"}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            error={errors.email?.message}
          />
          <Input
            type={"password"}
            placeholder={"Password"}
            {...register("password", {
              required: "Enter your password",
              minLength: {
                value: 6,
                message: "Email must be at least 6 character",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/,
                message:
                  "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
              },
            })}
            error={errors.password?.message}
          />

          <div>
            <Button type={"submit"} label={"submit"} />
          </div>
        </form>
        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
