import { FC } from "react";
import fontStyle from "../../../styles/typography.module.scss";

interface HeadlineSize {
  size?: "lg" | "xl";
  text: string;
  className?: string;
}

export const Headline: FC<HeadlineSize> = ({ text, size = "lg", className }) => {
  return <span className={`${fontStyle[`headline_${size}`]} ${className}`}>{text}</span>;
};

export default Headline;
