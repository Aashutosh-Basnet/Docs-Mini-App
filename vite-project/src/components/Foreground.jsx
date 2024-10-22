import React, { useRef } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "purple" },
    },
    {
      desc: "Lorem ipsum dolor sit amet.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "red" },
    },
    {
      desc: "Lorem ipsum dolor sit amet.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "purple" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed w-full h-full z-[3] top-0 left-0 flex flex-wrap gap-5 p-5" // Added padding
      style={{ overflow: "hidden" }} // Prevents overflow
    >
      {data.map((item, index) => (
        <Cards key={index} data={item} reference={ref} /> // Added key prop
      ))}
    </div>
  );
}

export default Foreground;
