import React from "react";
import fontStyle from "../../../../styles/typography.module.scss";

const CustomA = ({ to, text, className, aria }: { to: string; text: string; className?: string; aria?: string }) => {
  return (
    <a
      target="_blank"
      href={to}
      aria-label={aria}
      className={`${className}${fontStyle.body_xs} group relative font-medium ease-smooth`}
      rel="noreferrer noopener"
    >
      {text}
      <div className="absolute left-0 right-0 -bottom-1 mx-auto h-0.5 w-3/5 bg-zinc-900 opacity-0 duration-200 ease-smooth group-hover:w-full dark:bg-white" />
    </a>
  );
};

export default CustomA;
