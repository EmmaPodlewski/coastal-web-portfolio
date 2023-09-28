import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const Intro = () => {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const subtitle = "Software Development Consulting";
  return (
    <div className="flex flex-col items-center h-screen justify-center text-white z-10">
      <h1 className="text-center z-10 pb-4">Coastal Web Development</h1>
      <motion.h2
        variants={sentence}
        initial="hidden"
        animate="visible"
        className="mb-4 z-10"
      >
        {subtitle.split("").map((char, index) => {
          return (
            <motion.span
              className="text-2xl"
              key={`${char} - ${index}`}
              variants={letter}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h2>
      <NavLink to="#expertise" className="text-white z-10 ">
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={sentence}
          initial="hidden"
          className="flex items-center border border-white rounded-md px-5 py-2"
          onClick={() => setButtonIsClicked(!buttonIsClicked)}
        >
          <span>Take a look at our work here</span>
          <motion.span
            whileHover={{ rotate: buttonIsClicked ? 90 : 0, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="[&>svg]:w-6 text-white pl-2"
          >
            <ArrowRightIcon />
          </motion.span>
        </motion.div>
      </NavLink>
    </div>
  );
};

export default Intro;
