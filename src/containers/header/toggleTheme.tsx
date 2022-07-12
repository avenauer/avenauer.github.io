import React from "react";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="relative h-5 w-8 cursor-pointer rounded-full border-2 border-zinc-900 duration-200 ease-smooth dark:border-zinc-100"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div
        className={`mt-0.5 h-3 w-3 rounded-full bg-zinc-900 duration-150 ease-smooth dark:bg-zinc-100 ${
          theme != "dark" ? "translate-x-0.5" : "translate-x-3.5"
        }`}
      />
    </div>
  );
}
