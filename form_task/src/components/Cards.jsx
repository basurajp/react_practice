import React from "react";
import Card from "./Card";

const Cards = ({ users, handleRemove }) => {
  return (
    <div className="w-full max-h-96 overflow-auto  bg-sky-200 p-4 rounded-lg flex justify-center gap-2  flex-wrap  ">
      {users.map((item, index) => (
        <Card
          key={index}
          item={item}
          index={index}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default Cards;
