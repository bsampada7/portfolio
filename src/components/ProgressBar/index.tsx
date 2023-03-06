import React from "react";

const ProgressBar = ({ widthClass }: { widthClass: string }) => {
  return (
    <div className="chart inline-block">
      <div className="bar white">
        <div className="face top">
          <div className={`growing-bar ${widthClass}`}></div>
        </div>
        <div className="face side-0">
          <div className={`growing-bar ${widthClass}`}></div>
        </div>
        <div className="face floor">
          <div className={`growing-bar ${widthClass}`}></div>
        </div>
        <div className="face side-a"></div>
        <div className="face side-b"></div>
        <div className="face side-1">
          <div className={`growing-bar ${widthClass}`}></div>
        </div>
      </div>
    </div >
  );
};

export default ProgressBar;
