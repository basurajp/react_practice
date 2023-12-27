import React from "react";

const Card = ({ item, index , handleClick}) => {
  const { image, SongName, ArtistName, added } = item;
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-3 relative pb-10 mb-4 ">
      <div className="w-20 h-20 bg-orange-600 rounded-md  overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover "
          alt="this is image "
        />
      </div>
      <div>
        <h3 className="text-xl  font-semibold leading-none ">{SongName}</h3>
        <h6 className="text-sm mt-1">Artist Name </h6>
      </div>
      <button
        onClick={()=> handleClick(index)}
        className={`px-4 py-2  ${added ? 'bg-teal-500' : 'bg-orange-500' }
         absolute text-xs text-white rounded-full bottom-0 translate-y-[50%] translate-x-[50%]  whitespace-nowrap`}
      >
        {added ? "Added " : "Add to favourite "}
      </button>
    </div>
  );
};

export default Card;
