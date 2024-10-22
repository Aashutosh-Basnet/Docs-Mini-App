import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      className="relative w-60 rounded-[18px] bg-sky-100 p-5 overflow-hidden"
      style={{ height: "300px" }}
    >
      <FaRegFileAlt size={25} />
      <p className="text-xs mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="Footer absolute bottom-0 w-full left-0">
        <div
          className="flex justify-between items-center p-3"
          style={{ height: "55px" }}
        >
          <h5 className="text-sm">{data.filesize}</h5>
          <span
            className={`flex justify-center items-center bg-${data.tag.tagColor}-600 rounded-full p-2`}
          >
            {data.close ? (
              <IoClose size={20} />
            ) : (
              <LuDownload size={20} color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full bg-${data.tag.tagColor}-600 flex justify-center items-center text-sm font-semibold`}
            style={{ height: "20px" }}
          >
            <h3 style={{ padding: "6px" }}>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
