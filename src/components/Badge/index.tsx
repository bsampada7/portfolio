import React from "react";

export type BadgeType = {
  text: string,
  color?: string
}

const Badge = ({ text, color }: BadgeType) => {
  return (
    <div className={`w-fit h-fit py-0 px-2 rounded text-text-muted text-sm ${color ? color : 'bg-secondary'}`}>
      {text}
    </div>
  );
};

export default Badge;
