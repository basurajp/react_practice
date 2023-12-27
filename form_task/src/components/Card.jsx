import React from "react";

const Card = () => {
  return (
    <div className="h-full w-52 bg-zinc-100 rounded-lg flex flex-col items-center p-2 ">
      <div className="image w-[3vw] h-[3vw] rounded-full bg-blue-800 overflow-hidden">
        <img className="w-full object-cover h-full " src="" alt="" />
      </div>
      <h1 className="mt-1 text-xl font-semibold ">Basuraj</h1>
      <h4 className="opacity-40 text-sm font-semibold">Basu@gmail.com</h4>
      <p className="mt-1 text-center text-xs leading-1 tracking-tight font-semibold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
        fugiat?
      </p>
     <button className="px-3 py-1 bg-red-600 text-xs rounded-lg mt-1 text-white font-semibold" >Remove It</button>
    </div>
  );
};

export default Card;
