import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
const App = () => {
  const [val, setval] = useState([1]);

  const formData = (data) => {
    setval((prev) => {
      return [...prev, data];
    });
  };

  const removeCard = (aindex) => {
    setval((prev) => prev.filter((item, index) => index !== aindex));
  };

  return (
    <>
      <div className="w-full h-1/2 flex gap-5 flex-wrap overflow-hidden bg-cyan-100 p-5">
        {val.map((val, index) => (
          <Card key={index} val={val} index={index} removeCard ={removeCard} />
        ))}
      </div>
      <Form formData={formData} />
    </>
  );
};

export default App;
