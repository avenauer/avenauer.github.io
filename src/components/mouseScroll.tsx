import { motion } from "framer-motion";

const MouseScroll = () => {
  return (
    <a
      className="absolute relative left-0 right-0 bottom-20 mx-auto block h-8 w-5 rounded-full border-2 border-zinc-900 dark:border-white"
      aria-label="Show recent works"
      rel="noreferrer noopener"
      href="#recent_works"
    >
      <motion.div
        animate={{ y: 8 }}
        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="ml-1.5 mt-1.5 h-1.5 w-1 rounded-full bg-zinc-900 dark:bg-white"
      />
    </a>
  );
};

export default MouseScroll;
