import React from "react";
import Link from "next/link";
import fontStyle from "../../../../styles/typography.module.scss";

const CustomLink = ({ to, text, target, className, ariaLabel }: { to: string; text: string; target?: boolean; className?: string; ariaLabel?: string }) => {
  return (
    <Link
      href={to}
      target={target ? "_blank" : ""}
      aria-label={ariaLabel}
      className={`${className} ${fontStyle.body_md} group relative font-medium opacity-90 duration-200 ease-smooth`}
      rel="noopener noreferrer"
    >
      {text}
      <div className="absolute left-0 right-0 -bottom-1 mx-auto h-0.5 w-3/5 bg-zinc-900 opacity-0 duration-500 ease-smooth group-hover:w-full group-hover:opacity-60 dark:bg-white" />
    </Link>
  );
};

export default CustomLink;
