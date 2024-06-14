import React, { useRef } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "hi! my name is aashutosh basnet.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "hi! my name is aashutosh basnet.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "WhatUpppp", tagColor: "blue" },
    },
    {
      desc: "hi! my name is aashutosh basnet.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Cards key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
