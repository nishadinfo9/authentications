import React, { use } from "react";
import Input from "../reuseable/Input";
import Button from "../reuseable/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authServices } from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmited = async (data) => {
    try {
      await authServices.createAccount(data);
      console.log("✅ Account created");

      const session = await authServices.login(data);
      if (!session) throw new Error("Login failed after registration");

      console.log("✅ Logged in");

      const user = await authServices.getCurrentUser();
      if (!user) throw new Error("Unable to fetch user data");

      dispatch(
        login({
          userData: {
            name: user.name,
            email: user.email,
          },
        })
      );
      navigate("/");
    } catch (error) {
      console.error("❌ Registration Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmited)} className="space-y-5">
          <Input
            type={"text"}
            placeholder={"Name"}
            {...register("name", {
              required: "Enter your name",
              minLength: {
                value: 4,
                message: "must be at least 4 character",
              },
              maxLength: {
                value: 10,
                message: "must be at least 10 character",
              },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Enter a valid name",
              },
            })}
            error={errors.name?.message}
          />
          <Input
            type={"email"}
            placeholder={"Email"}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a vaild email",
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
                message: "must be at least 6 character",
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
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
