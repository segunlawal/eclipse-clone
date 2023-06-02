import React, { useState } from "react";
import { gsap } from "gsap";
import ReactCardFlip from "react-card-flip";
import {
  FaChessBishop,
  FaChessKnight,
  FaChessRook,
  FaChessQueen,
  FaChessKing,
  FaChessPawn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Reveal } from "../hooks/Reveal";

const Four = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const theCards = [
    {
      id: 1,
      piece: "King",
      description: "Moves one square, vital piece",
      isFlipped: false,
      icon: FaChessKing,
    },
    {
      id: 2,
      piece: "Queen",
      description: "Moves freely in any direction",
      isFlipped: false,
      icon: FaChessQueen,
    },
    {
      id: 3,
      piece: "Rook",
      description: "Moves horizontally, vertically, unlimited distance",
      isFlipped: false,
      icon: FaChessRook,
    },
    {
      id: 4,
      piece: "Bishop",
      description: "Moves diagonally, unlimited distance",
      isFlipped: false,
      icon: FaChessBishop,
    },
    {
      id: 5,
      piece: "Knight",
      description: "L-shaped jumps, ignores obstacles",
      isFlipped: false,
      icon: FaChessKnight,
    },
    {
      id: 6,
      piece: "Pawn",
      description: "Moves forward, captures diagonally.",
      isFlipped: false,
      icon: FaChessPawn,
    },
  ];
  const [cardsArr, setCardsArr] = useState(theCards);

  const handleClick = (id) => {
    // Card flipping
    const updatedCardsArr = cardsArr.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          isFlipped: !card.isFlipped,
        };
      }
      return card;
    });
    setCardsArr(updatedCardsArr);
  };

  const handleMouseEnter = (id) => {
    // Card flipping
    const updatedCardsArr = cardsArr.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          isFlipped: !card.isFlipped,
        };
      }
      return card;
    });
    setCardsArr(updatedCardsArr);
  };

  const cardVariants = {
    animate: {
      opacity: [0.98, 1, 0.98],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        type: "tween",
      },
    },
  };

  const cards = cardsArr.map((card) => {
    const Icon = card.icon;
    return (
      <motion.div
        key={card.id}
        variants={cardVariants}
        animate="animate"
        className={`w-40 h-40 rounded-lg flex justify-center items-center ${
          card.isFlipped ? "bg-[#769656]" : "bg-[#eeeed2]"
        }`}
        onClick={() => handleClick(card.id)}
        onMouseEnter={() => handleMouseEnter(card.id)}
      >
        <ReactCardFlip isFlipped={card.isFlipped} flipDirection="horizontal">
          <div className="flex flex-col">
            <Icon className="sm:text-6xl mx-auto text-3xl" />
            <p>The {card.piece}</p>
          </div>

          <div>
            <p className="text-center text-[#eeeed2]">{card.description}</p>
          </div>
        </ReactCardFlip>
      </motion.div>
    );
  });

  return (
    <div className="flex justify-center">
      <Reveal>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-5 py-10">
          {cards}
        </div>
      </Reveal>
    </div>
  );
};

export default Four;
