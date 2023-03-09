import React from "react";

export type BadgeType = {
  text: string,
  color?: string
}

const Badge = ({ text, color }: BadgeType) => {
  return (
    <div className={`w-fit h-fit py-0 px-2 rounded text-white text-sm ${color ? color : 'bg-amber-500'}`}>
      {text}
    </div>
  );
};

export default Badge;
