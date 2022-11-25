import React, { useEffect, useRef, useState } from "react";
import { motion, useDomEvent } from "framer-motion";
import Image from "next/dist/client/legacy/image";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

const ZoomImage = ({ image }: { image: any }) => {
  const lazyRoot = React.useRef(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOpen(false);
    });
  });

  const number = 2;

  return (
    <motion.div style={{ flex: `1 0 calc(50% / ${number})` }} className={`image-container ${isOpen ? "" : ""}`}>
      <motion.div
        animate={{ opacity: isOpen ? 0.8 : 0 }}
        transition={transition}
        className={`fixed top-0 bottom-0 right-0 left-0 z-50 max-h-screen bg-zinc-900 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        onClick={() => setOpen(false)}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      {/*</motion.div><motion.div className={`image-wrapper ${isOpen ? "" : ""}`} onClick={() => setOpen(!isOpen)} layout transition={transition}>
        <motion.img alt="" src={image.src} width={image.width} height={image.height} />
      </motion.div>*/}
    </motion.div>
  );
};

export default ZoomImage;
