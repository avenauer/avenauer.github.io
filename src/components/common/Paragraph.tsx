import { FC } from "react";
import fontStyle from "../../../styles/typography.module.scss";

interface ParagraphSize {
  size?: 1 | 2 | 3 | 4 | 5;
  text: string;
}

export const Paragraph: FC<ParagraphSize> = ({ text, size = 1 }) => {
  return <span className={`${fontStyle[`test_${size}`]}`}>{text}</span>;
};

export default Paragraph;
