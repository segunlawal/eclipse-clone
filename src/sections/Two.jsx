import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { HiOutlineCursorClick } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  FaChessBishop,
  FaChessKnight,
  FaChessRook,
  FaChessQueen,
  FaChessKing,
  FaChessPawn,
} from "react-icons/fa";

const Two = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const squareContent = [
    ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"],
    ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
    ["A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8"],
  ];

  const handleClick = () => {
    if (visibleCount === 8) {
      return; // Stop further increment after the 8th click
    }
    setVisibleCount((prevCount) => prevCount + 1);
  };

  // Chess board
  const renderSquares = () => {
    const squares = [];
    for (let i = 0; i < visibleCount; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        const color = (i + j) % 2 ? "bg-[#769656]" : "bg-[#eeeed2]";
        const content = squareContent[i][j];
        row.push(
          <div
            className={`text-lg flex justify-center items-center w-10 h-10 ${color}`}
            key={j}
          >
            {(content == "A2" ||
              content == "B2" ||
              content == "C2" ||
              content == "D2" ||
              content == "E2" ||
              content == "F2" ||
              content == "G2" ||
              content == "H2") && <FaChessPawn />}

            {(content == "A7" ||
              content == "B7" ||
              content == "C7" ||
              content == "D7" ||
              content == "E7" ||
              content == "F7" ||
              content == "G7" ||
              content == "H7") && <FaChessPawn className="text-white" />}

            {(content == "C1" || content == "F1") && <FaChessBishop />}
            {(content == "C8" || content == "F8") && (
              <FaChessBishop className="text-white" />
            )}
            {(content == "B1" || content == "G1") && <FaChessKnight />}
            {(content == "B8" || content == "G8") && (
              <FaChessKnight className="text-white" />
            )}
            {(content == "A1" || content == "H1") && <FaChessRook />}
            {(content == "A8" || content == "H8") && (
              <FaChessRook className="text-white" />
            )}
            {content == "E1" && <FaChessQueen />}
            {content == "E8" && <FaChessQueen className="text-white" />}
            {content == "D1" && <FaChessKing />}
            {content == "D8" && <FaChessKing className="text-white" />}
          </div>
        );
      }
      squares.push(
        <div className="flex" key={i}>
          {row}
        </div>
      );
    }
    return squares;
  };

  const buttonVariants = {
    animate: {
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        type: "tween",
      },
    },
  };

  return (
    <div className="md:-mt-0 -mt-[15vh] lg:text-6xl sm:text-[2.5rem] text-3xl text-left text-black  pt-5 pl-5 font-medium tracking-tighter">
      <p>Chess is an</p>
      <div className="flex text-[#ff4301]">
        <p>intellectual ballet</p>
        <BsDot className="-ml-2 -mt-2 text-4xl" />
      </div>
      <p>of calculated finesse</p>
      <p>transcending boundaries</p>
      <div className="mt-4 mx-auto w-fit shadow-2xl">{renderSquares()}</div>

      <div className="absolute bottom-5 sm:grid grid-cols-2 ">
        <p className="text-xl tracking-tight text-[#ff4301] px-2">
          Chess, the ultimate battle of wits, intellect, strategy, and
          creativity. It challenges the mind, nurtures creativity, and unveils
          the beauty of complexity.
        </p>
        <div className="flex justify-end ">
          <motion.div
            variants={buttonVariants}
            animate="animate"
            className="cursor-pointer flex justify-center items-center md:h-28 md:w-28 h-16 w-16 bg-black rounded-[50%] mx-5"
            whileHover={{
              backgroundColor: "#ff4301",
              transition: {
                ease: "linear",
                duration: 1,
              },
            }}
            whileTap={{
              backgroundColor: "#ff4301",
              scale: 0.8,
            }}
            onClick={handleClick}
          >
            <HiOutlineCursorClick className="text-white md:text-6xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Two;
