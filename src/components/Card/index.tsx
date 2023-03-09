import React, { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="card">
      <div className="content"></div>
      {children}
    </div>
  );
};

export default Card;
