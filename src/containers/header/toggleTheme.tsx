import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { animTransition, onLoadAnimation } from "../../../styles/easings";
import Paragraph from "../../components/common/text/Paragraph";

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function Dark() {
    return theme === "dark";
  }

  return (
    <motion.div
      onClick={() => setTheme(Dark() ? "light" : "dark")}
      className="group cursor-pointer p-4 md:p-2"
      initial={{ opacity: 0, scale: 0.5, y: 0 }}
      animate={onLoadAnimation}
      transition={animTransition}
      title={`Turn on ${Dark() ? "light" : "dark"} mode`}
    >
      <div className="group-dark:hover:bg-blue-500 relative h-6 w-10 rounded-full bg-zinc-900 dark:bg-white">
        <motion.span animate={{ y: Dark() ? 37 : -3 }} className="absolute left-0 right-0 bottom-5 mx-auto text-center text-xs font-medium">
          {Dark() ? "DARK" : "LIGHT"}
        </motion.span>
        <motion.svg animate={{ x: Dark() ? 0 : 15 }} width="24" height="24">
          <motion.circle transition={{ duration: 0.2 }} cx={12} cy={12} r={10} className={`duration-200 ${Dark() ? "fill-zinc-900" : "fill-white"}`} />
          <motion.circle
            transition={{ duration: 0.2 }}
            animate={{ x: Dark() ? 0 : 8, scale: Dark() ? 1 : 0.4, fill: Dark() ? "red" : "blue", opacity: Dark() ? 1 : 0 }}
            className={`group-dark:hover:fill-blue-500 ${Dark() ? "fill-white" : "fill-zinc-900"}`}
            cx={18}
            cy={12}
            r={8}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
}
