import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  // icon ,desc filesize  colsed or Download Button tagdetails
  const ref  = useRef(null)
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9md",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now ",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9md",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now ",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9md",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now ",
        tagColor: "green",
      },
    },
 
   
    
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data = {item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
