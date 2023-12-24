import React, { useEffect, useRef, useState } from "react";
import { useCallback } from "react";

const App = () => {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

// use ref Hook 

 const passwordRef =  useRef(null)




  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "012356789";
    if (charAllowed) str += "~!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * 10 + 1);
      pass += str.charAt(char);

      setpassword(pass);
    }
  }, [length, numberAllowed, charAllowed, setpassword]);

const copyPasswordToClip = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange (0,9)
window.navigator.clipboard.writeText(password)


},[password])



  useEffect(()=>{
    passwordGenrator()
  },[length , numberAllowed ,charAllowed ,passwordGenrator])





  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-zinc-500">
        <h1 className="text-white text-center my-3">Password Genrator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClip} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy{" "}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-start gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.checked );
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Chater</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
