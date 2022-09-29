import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { animTransition, onLoadAnimation, onLoadInitial } from "../../../styles/easings";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <motion.div className="group" initial={{ opacity: 0, scale: 0.5, y: 0 }} animate={onLoadAnimation} transition={animTransition}>
      <div
        className="relative h-5 w-8 cursor-pointer rounded-full border-2 border-zinc-900 duration-200 ease-smooth group-hover:border-blue-500 dark:border-zinc-100"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div
          className={`mt-0.5 h-3 w-3 rounded-full bg-zinc-900 duration-150 ease-smooth group-hover:bg-blue-500 dark:bg-zinc-100 dark:hover:fill-blue-500 ${
            theme != "dark" ? "translate-x-0.5" : "translate-x-3.5"
          }`}
        />
      </div>
    </motion.div>
  );
}
