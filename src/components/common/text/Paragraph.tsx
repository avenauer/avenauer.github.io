import {FC} from "react";
import fontStyle from "../../../../styles/typography.module.scss";

interface ParagraphSize {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  text: any;
  className?: string;
}

export const Paragraph: FC<ParagraphSize> = ({ text, size = "sm", className }) => {
  return <span className={`${fontStyle[`body_${size}`]} ${className}`}>{text}</span>;
};

export default Paragraph;
