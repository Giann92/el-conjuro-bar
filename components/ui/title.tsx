import { FC } from "react";

interface TitleProps {
  title: string;
//   titlePrimary: string;
}

const Title: FC<TitleProps> = ({ title,}) => {
  return (
    <h1 className="text-4xl flex items-center text-black font-semibold">
      <span>{title}</span>
      {/* <span>{titlePrimary}</span> */}
    </h1>
  );
};
export default Title;
