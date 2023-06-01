import { TbSteeringWheel } from "react-icons/tb";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Scroller = () => {
  const [currentDegree, setCurrentDegree] = useState(null);
  const { scrollYProgress } = useScroll();

  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(
    () =>
      yRange.on("change", (val) => {
        setCurrentDegree(Math.trunc(yRange.current) * 3.6);
      }),
    [yRange]
  );
  return (
    <div className="z-60">
      <motion.div
        style={{
          rotate: currentDegree,
        }}
        className=""
      >
        <TbSteeringWheel className="text-[7rem] text-black" />
      </motion.div>
    </div>
  );
};

export default Scroller;
