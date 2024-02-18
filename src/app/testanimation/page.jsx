"use client";
import { motion } from "framer-motion";

const TestPage = () => {
  const variants = {
    variant1: { x: 400, y: 300, opacity: 0.5 },
    variant2: { x: 100, y: -300, rotate: 90 },
  };
  return (
    <div className="h-full flex justify-center items-center">
      <motion.div
        className="bg-red-400 h-96 w-96 rounded-md"
        initial={{ x: -300 }}
        variants={variants}
        animate="variant2"
        transition={{ delay: 2, duration: 4 }}
      ></motion.div>
    </div>
  );
};

export default TestPage;
