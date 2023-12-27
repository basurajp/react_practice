import React, { useState } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

const App = () => {
  const data = [
    {
      image: "https://placekitten.com/200/300?image=1",
      SongName: "Song 1",
      ArtistName: "Artist 1",
      added: false,
    },
    {
      image: "https://placekitten.com/200/300?image=2",
      SongName: "Song 2",
      ArtistName: "Artist 2",
      added: false,
    },
    {
      image: "https://placekitten.com/200/300?image=3",
      SongName: "Song 3",
      ArtistName: "Artist 3",
      added: false,
    },
    {
      image: "https://placekitten.com/200/300?image=4",
      SongName: "Song 4",
      ArtistName: "Artist 4",
      added: false,
    },
    {
      image: "https://placekitten.com/200/300?image=5",
      SongName: "Song 5",
      ArtistName: "Artist 5",
      added: false,
    },
    {
      image: "https://placekitten.com/200/300?image=6",
      SongName: "Song 6",
      ArtistName: "Artist 6",
      added: false,
    },
    {
      image: "https://placekitten.com/200/300?image=7",
      SongName: "Song 7",
      ArtistName: "Artist 7",
      added: false,
    },
    {
      image: "https://placekitten.com/200/300?image=8",
      SongName: "Song 8",
      ArtistName: "Artist 8",
      added: false,
    },
    {
      image: "https://placekitten.com/200/300?image=9",
      SongName: "Song 9",
      ArtistName: "Artist 9",
      added: false,
    },
  ];

  const [songData, setsongData] = useState(data);

  const handleClick = (cindex) => {
    return setsongData((prev) => {
      return prev.map((item, index) => {
        if (index === cindex) {
          return { ...item, added: !item.added };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="">
        <NavBar  songData = {songData}/>
        <div className="flex gap-4 flex-wrap px-20 mt-10">
          {songData.map((item, index) => (
            <Card
              key={index}
              index={index}
              item={item}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
