import React from "react";

const Picture = ({ className, src, alt }: { className: string; src: any; alt: string }) => {
  return (
    <picture style={{}} title={alt} className={`${className}`}>
      <source srcSet={src} />
      <img className="inline-block h-full w-full" src={src} alt={alt} />
    </picture>
  );
};

export default Picture;
