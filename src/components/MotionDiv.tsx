import React from "react";
import { motion } from "framer-motion";
import { FADE } from "@/lib/data";



interface Props {
  children: React.ReactNode;
}

function MotionDiv({ children }: Props) {
  return (
    <motion.div
      key={Math.random().toString()}
      variants={FADE}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
