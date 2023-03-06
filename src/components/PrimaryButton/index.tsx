import React from "react";

const PrimaryButton = ({ text, className, onClick }:
  { text: string, className?: string, onClick?: (e: any) => void }) => {

  const handleOnClick = (e: any) => {
    if (onClick) {
      onClick(e)
    }
  }
  return <div
    className={"btn bg-primary text-white w-fit py-3 px-4 rounded-lg cursor-pointer hover:bg-primary-dark m-2 "
      + className}
    onClick={handleOnClick}
  >
    {text}
  </div>;
};

export default PrimaryButton;
