import { FC, HTMLProps } from "react";

interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  title: string;
}

const Title: FC<TitleProps> = ({ title, className, ...rest }) => {
  return (
    <h1 className={`text-4xl flex items-center text-black font-semibold ${className}`} {...rest}>
      <span>{title}</span>
    </h1>
  );
};

export default Title;

