import React from "react";
import { ReactComponent as Eclipse } from "../assets/eclipse.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const One = () => {
  return (
    <div className=" pt-3">
      <div className="flex px-5">
        <motion.div
          whileHover={{
            rotate: 360,
            transition: {
              ease: "linear",
              duration: 6,
              repeat: Infinity,
            },
          }}
        >
          <Logo className="sm:w-20 w-10 cursor-pointer" />
        </motion.div>
        {/* <div>
          <Navbar />
        </div> */}
      </div>
      <div className="mt-[15rem]">
        <Eclipse />
      </div>
    </div>
  );
};

export default One;
