import React from "react";

const PrimaryButton = ({ text, className, onClick, submit }:
  { text: string, className?: string, onClick?: (e: any) => void, submit?: boolean }) => {

  const handleOnClick = (e: any) => {
    if (onClick) {
      onClick(e)
    }
  }
  return <button
    className={"btn w-fit py-3 px-4 rounded-lg cursor-pointer m-2 bg-primary hover:bg-primary-dark "
      + className}
    onClick={handleOnClick}
    type={submit ? "submit" : "button"}
  >
    {text}
  </button>;
};

export default PrimaryButton;
