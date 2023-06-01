import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { HiOutlineCursorClick } from "react-icons/hi";
import { motion } from "framer-motion";

const Two = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const texts = [
    "boy",
    "egg",
    "cat",
    "dog",
    "tree",
    "sun",
    "moon",
    "car",
    "book",
    "pen",
  ];

  const handleClick = () => {
    setVisibleCount((prevCount) => prevCount + 1);
  };

  return (
    // lg:-mt-0 -mt-[15vh]
    <div className="lg:text-7xl sm:text-[2.5rem] text-3xl text-left text-black  pt-5 pl-5 font-medium tracking-tighter">
      <p>Eclipse is a</p>
      <div className="flex text-[#ff4301]">
        <p>customizable rollup</p>
        <BsDot className="-ml-2 -mt-2 text-5xl" />
      </div>
      <p>provider for developers building</p>
      <p>decentralized applications</p>
      <div className="flex">
        {[...Array(10)].map((_, index) => (
          <p
            className="text-sm"
            key={index}
            style={{ display: index < visibleCount ? "block" : "none" }}
          >
            {texts[index]}
          </p>
        ))}
      </div>

      <div className="absolute bottom-5 sm:grid grid-cols-2 ">
        <p className="text-xl tracking-tight text-[#ff4301] px-2">
          Eclipse is a new kind of architecture built to power the next
          generation of decentralized applications we’ve all been dreaming
          about.
        </p>
        <div className="flex justify-end ">
          <motion.div
            className="cursor-pointer flex justify-center items-center h-28 w-28 bg-black rounded-[50%] mx-5"
            whileHover={{
              backgroundColor: "#ff4301",
              transition: {
                ease: "linear",
                duration: 1,
                // repeat: Infinity,
              },
            }}
            whileTap={{
              backgroundColor: "#ff4301",
              scale: 0.8,
            }}
            onClick={handleClick}
          >
            <HiOutlineCursorClick className="text-white text-6xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Two;
