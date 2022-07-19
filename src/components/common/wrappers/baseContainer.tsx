import React, { ReactNode } from "react";

const BaseContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={`relative mx-auto max-w-screen-xl px-2 sm:px-4 md:px-6 lg:px-8 ${className}`}>{children}</div>;
};

export default BaseContainer;
