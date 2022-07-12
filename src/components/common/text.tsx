import React, { FC } from "react";

interface Size {
  headlineSize?: 1 | 2 | 3 | 4 | 5;
}

const Paragraph: FC<Size> = ({ headlineSize = 1 }) => {
  return <span>{headlineSize}</span>;
};


const Text = {
  Headline,
  Paragraph,
};

export default Text;
