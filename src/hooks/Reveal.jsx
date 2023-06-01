import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
