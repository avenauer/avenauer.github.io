import { FC } from "react";

interface ParagraphSize {
  size?: 1 | 2 | 3 | 4 | 5;
}

export const Paragraph: FC<ParagraphSize> = ({ size = 1 }) => {
  return <span>{size}</span>;
};

export default Paragraph;
