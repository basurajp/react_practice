import React from "react";
import { useForm } from "react-hook-form";
const Form = ({ handleFormSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();

  const shandleFormSubmitData = (data) => {
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className="mt-10 flex justify-center gap-10">
      <form
        className="flex gap-10"
        onSubmit={handleSubmit(shandleFormSubmitData)}
      >
        <input
          {...register("name")}
          className="rounded-md px-2 py-1 text-base
             font-semibold outline-none "
          type="text"
          placeholder="Name "
        />
        <input
          {...register("email")}
          className="rounded-md px-2 py-1 text-base
             font-semibold outline-none "
          type="text"
          placeholder="email"
        />
        <input
          {...register("image")}
          className="rounded-md px-2 py-1 text-base
             font-semibold outline-none "
          type="text"
          placeholder="image Url "
        />
        <input
          className="rounded-md px-5 py-1 bg-blue-600 text-white text-sm font-semibold"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Form;
