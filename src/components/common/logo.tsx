import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { animTransition, onLoadAnimation, onLoadInitial } from "../../../styles/easings";

const Logo = () => {
  return (
    <Link passHref href="/">
      <motion.div
        className="cursor-pointer p-4 hover:fill-blue-500 md:p-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={onLoadAnimation}
        transition={animTransition}
      >
        <a className="block w-8 fill-zinc-900 duration-200 ease-smooth hover:fill-blue-500 dark:fill-white dark:hover:fill-blue-500">
          <svg viewBox="0 0 71.55 86.48">
            <path d="M35.79,86.47A19.31,19.31,0,0,1,22.1,53.53c2.51-2.59,6.14-6.42,9.79-10.29-3.65-3.86-7.26-7.69-9.78-10.27a19.32,19.32,0,1,1,27.37,0c-2.52,2.58-6.11,6.37-9.8,10.28,3.69,3.91,7.28,7.7,9.8,10.28a19.5,19.5,0,0,1,0,27.3A19.23,19.23,0,0,1,35.79,86.47Zm0-39.1c-3.69,3.92-7.11,7.53-9.61,10.11a13.65,13.65,0,1,0,19.25,0C42.92,54.92,39.41,51.21,35.78,47.37Zm0-41.69A13.64,13.64,0,0,0,26.14,29l0,0c2.5,2.58,5.92,6.19,9.61,10.11,3.63-3.84,7.14-7.55,9.64-10.11A13.64,13.64,0,0,0,35.79,5.68Z" />
            <path d="M2.83,86.48A2.83,2.83,0,0,1,0,83.65V2.83a2.84,2.84,0,0,1,5.67,0V83.65A2.84,2.84,0,0,1,2.83,86.48Z" />
            <path d="M68.72,86.48a2.84,2.84,0,0,1-2.84-2.83V2.83a2.84,2.84,0,0,1,5.67,0V83.65A2.83,2.83,0,0,1,68.72,86.48Z" />
          </svg>
        </a>
      </motion.div>
    </Link>
  );
};

export default Logo;
