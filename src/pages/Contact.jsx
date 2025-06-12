import React, { useState } from "react";
import Input from "../components/reuseable/Input";
import Button from "../components/reuseable/Button";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit(formHandler)} className="space-y-4">
        <Input
          type={"name"}
          placeholder={"Your Name"}
          className={"w-full border rounded px-4 py-2"}
          {...register("name", {
            required: "Enter your name",
            minLength: {
              value: 4,
              message: "name must be at least 4 character",
            },
            maxLength: {
              value: 10,
              message: "name must be more then 10 character",
            },
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: "Enter your a valid name",
            },
          })}
          error={errors.name?.message}
        />
        <Input
          type={"email"}
          placeholder={"Your Email"}
          className={"w-full border rounded px-4 py-2"}
          {...register("email", {
            required: "Enter your email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter your vaid email",
            },
          })}
          error={errors.email?.message}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full border rounded px-4 py-2"
          {...register("message", { required: true })}
        />
        <Button
          type={"submit"}
          className={` text-white px-6 py-2`}
          label={"Send Message"}
        />
      </form>
    </div>
  );
};

export default Contact;
