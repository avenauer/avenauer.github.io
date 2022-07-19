import React from "react";
import Link from "next/link";
import fontStyle from "../../../../styles/typography.module.scss";

const CustomLink = ({ to, text }: { to: string; text: string }) => {
  return (
    <Link href={to} passHref>
      <a className={`${fontStyle.body_xs} group relative font-medium opacity-90 ease-smooth`}>
        {text}
        <div className="absolute left-0 right-0 -bottom-1 mx-auto h-0.5 w-3/5 bg-zinc-900 opacity-0 duration-200 ease-smooth group-hover:w-full group-hover:opacity-60 dark:bg-white" />
      </a>
    </Link>
  );
};

export default CustomLink;
