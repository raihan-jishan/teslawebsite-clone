/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

const Common = ({ name, children , icon }) => {
  const [shown, setShown] = useState(false);
  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
    },
    exit: {
      y: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <motion.div
      onHoverStart={() => setShown(true)}
      onHoverEnd={() => setShown(false)}
      className="hover:bg-gray-300"
    >
      <a
        href="#"
        className="block    py-4 px-3 md:p-0 text-gray-900       font-semibold max-lg:flex max-lg:items-center max-lg:justify-between max-lg:gap-3  "
        aria-current="page" 
      >
        {name} <span className="max-lg:block hidden">{icon}</span>
      </a>

      <motion.ul
        variants={showMenu}
        initial="exit"
        animate={shown ? "enter" : "exit"}
        className="flex flex-col font-medium p-4 md:p-0 mt-4   rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
      >
        {children}
      </motion.ul>
    </motion.div>
  );
};

export default Common;
