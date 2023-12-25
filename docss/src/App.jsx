import React from "react";
import Bacground from "./components/Bacground";
import Foreground from "./components/Foreground";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 relative">
      <Bacground />
      <Foreground/>
    </div>
  );
};

export default App;
