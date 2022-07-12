import { FC } from "react";

interface HeadlineSize {
  size?: 1 | 2;
}

export const Headline: FC<HeadlineSize> = ({ size = 1 }) => {
  return <span>{size}</span>;
};

export default Headline;
