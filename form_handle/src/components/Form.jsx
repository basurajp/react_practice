import React from "react";
import { useForm } from "react-hook-form";
const Form = ({ formData }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    formData(data);
    reset();
  };

  return (
    <div className="m-5  ">
      <form className="flex gap-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2"
          {...register("name")}
          type="text"
          placeholder="Name "
        />
        <input
          className="p-2"
          {...register("email")}
          type="email"
          placeholder="email"
        />
        <input
          className="p-2"
          {...register("image")}
          type="text"
          placeholder="image url"
        />
        <input
          className="py-1 px-3 bg-blue-600 text-white rounded-lg "
          type="Submit"
        />
      </form>
    </div>
  );
};

export default Form;
