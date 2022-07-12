import React from "react";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="cursor-pointer relative h-5 w-8 rounded-full border-2 border-zinc-900 dark:border-zinc-100 ease-smooth duration-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div
        className={`${
          theme != "dark" ? "ml-3.5" : "ml-0.5"
        } w-3 h-3 mt-0.5 ease-smooth duration-150 rounded-full bg-zinc-900 dark:bg-zinc-100 `}
      />
    </div>
  );
}
