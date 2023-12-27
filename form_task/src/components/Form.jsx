import React from "react";

const Form = () => {
  return (
    <div className="mt-10 flex justify-center gap-10">
      <form className="flex gap-10">
        <input
          className="rounded-md px-2 py-1 tex-base
             font-semibold outline-none "
          type="text" placeholder="Name "
        />
        <input
          className="rounded-md px-2 py-1 tex-base
             font-semibold outline-none "
          type="text" placeholder="email"
        />
        <input
          className="rounded-md px-2 py-1 tex-base
             font-semibold outline-none "
          type="text"
          placeholder="image Url "
        />
        <input className="rounded-md px-5 py-1 bg-blue-600 text-white text-sm font-semibold" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
