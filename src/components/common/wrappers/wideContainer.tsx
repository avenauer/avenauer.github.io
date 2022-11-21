import React, {ReactNode} from "react";

const WideContainer = ({ id, children, className }: { id?: string; children: ReactNode; className?: string }) => {
  return (
    <div id={id} className={`relative mx-auto max-w-screen-2xl px-2 sm:px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default WideContainer;
