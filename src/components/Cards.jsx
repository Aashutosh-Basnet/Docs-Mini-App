import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-[250px] h-[300px] rounded-[35px] bg-zinc-700 text-white p-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full h-20  py-2">
        <div className="flex items-center justify-between px-8 py-2">
          <h5>{data.filesize}</h5>
          <span className="w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-between">
            {data.close ? (
              <IoClose />
            ) : (
              <MdOutlineFileDownload size=".8em" color="#000" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-2 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-md pb-[2px]">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
