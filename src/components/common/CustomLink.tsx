import React from "react";
import Link from "next/link";
import fontStyle from "../../../styles/typography.module.scss";

const CustomLink = ({ to, text }: { to: string; text: string }) => {
  return (
    <Link href={to} passHref>
      <a
        className={`${fontStyle.body_xs} group relative ease-smooth font-medium opacity-90`}
      >
        {text}
        <div className="left-0 right-0 -bottom-1 mx-auto absolute h-0.5 opacity-0 w-3/5 dark:bg-white bg-zinc-900 duration-200 ease-smooth group-hover:opacity-60 group-hover:w-full" />
      </a>
    </Link>
  );
};

export default CustomLink;
