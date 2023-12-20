import React from "react";

const Card = ({val,index,removeCard}) => {
  return (
    <div className="h-52 w-64 bg-slate-400 rounded-lg container p-5 ">
      <div className="image w-14 h-14 bg-zinc-800 rounded-full overflow-hidden  ">
        <img src={val.image} className="w-full h-full " />
      </div>
      <h1>{val.name}</h1>
      <h4>{val.email}</h4>
      <button onClick={()=>{removeCard(index)}}  className="py-1 px-3 bg-red-600 rounded-lg font-semibold text-white text-sm mt-2 ">Delete</button>
    </div>
  );
};

export default Card;
