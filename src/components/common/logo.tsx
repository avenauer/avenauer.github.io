import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { animTransition, onLoadAnimation } from "../../../styles/easings";

const Logo = () => {
  return (
    <Link passHref href="/">
      <motion.a
        aria-label="Open main page"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={onLoadAnimation}
        transition={animTransition}
        className="group block w-16 cursor-pointer fill-zinc-900 p-4 duration-100 dark:fill-white md:w-12 md:p-2"
      >
        <svg viewBox="0 0 80.9 85.06">
          <path d="M43.38,42.53c3.85-4.08,7.64-8.08,10.27-10.77a18.81,18.81,0,0,0,0-26.31A18.61,18.61,0,1,0,27.3,31.76c2.62,2.7,6.44,6.75,10.24,10.77-3.81,4-7.63,8.09-10.26,10.78a18.61,18.61,0,0,0,26.35,26.3,18.79,18.79,0,0,0,0-26.3C51,50.62,47.23,46.61,43.38,42.53Zm-13-13.74,0,0A14.36,14.36,0,1,1,50.62,8.46a14.52,14.52,0,0,1,0,20.33C48,31.47,44.26,35.41,40.46,39.44,36.57,35.31,33,31.48,30.34,28.79ZM50.62,76.61A14.36,14.36,0,1,1,30.34,56.28c2.61-2.69,6.23-6.52,10.12-10.65,3.8,4,7.53,8,10.14,10.65A14.52,14.52,0,0,1,50.62,76.61Z" />
          <path
            className="opacity-20 duration-200 group-hover:opacity-100"
            d="M80.89,2.11V3L76.67,7.42l0,0L43.4,42.53l-2.93,3.1-2.94-3.1L4.27,7.43,0,3V2.11A2.12,2.12,0,0,1,2.14,0,2.16,2.16,0,0,1,3.65.6l.14.15L40.47,39.44,77.07.81l.34-.35a2.13,2.13,0,0,1,3.48,1.65Z"
          />
          <path className="duration-200" d="M2.13,85.06A2.12,2.12,0,0,1,0,82.94V2.13a2.13,2.13,0,1,1,4.25,0V82.94A2.12,2.12,0,0,1,2.13,85.06Z" />
          <path className="duration-200" d="M78.78,85.06a2.12,2.12,0,0,1-2.13-2.12V2.13a2.13,2.13,0,1,1,4.25,0V82.94A2.12,2.12,0,0,1,78.78,85.06Z" />
        </svg>
      </motion.a>
    </Link>
  );
};

export default Logo;
