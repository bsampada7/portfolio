import React from "react";
import Book from "../Book";
import CircuitBoard from "./CircuitBoard";
import Matrix from "./Matrix";

const Education = () => {
  return (
    <>
      {/* <Book /> */}
      <div className="flex flex-col w-full h-full p-10 pt-32 bg-gray-dark relative">
        <div className="text-3xl font-bold mb-4 text-primary">
          <span>Education</span>
        </div>
        <div className="pulchowk w-full h-1/2 relative overflow-hidden">
          <CircuitBoard />
          <div className="flex flex-col text-silver text-3xl mt-4">
            <span>Bachelors in Electronics and Communication Engineering</span>
            <span>IOE Pulchowk Campus, Tribhuvan University</span>
            <span className="font-bold">2014 - 2018</span>
          </div>

        </div>
        {/* <div className="plane-animation w-1/2 h-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-10">
          <img src="images/usa.webp" alt='USA' className="absolute w-16 right-0 bottom-0"></img>
          <img src="images/nepal.svg" alt='Nepal' className="absolute w-12 top-0"></img>
          <svg  viewBox="0 0 500 262" xmlns="http://www.w3.org/2000/svg" className="col-span-3">
            <g>
              <path
                vectorEffect="non-scaling-stroke"
                strokeDasharray={5}
                id="plane-path-svg" strokeLinecap="round" fontSize="9pt" stroke="#262626" strokeWidth="0.2mm" fill="none"
                // d="M4,108 C29,48 76,8 157,3" 
                d="M27,15 C211,2 404,106 483,245"
                />
            </g>
          </svg>
          <img src="images/plane.png" alt='plane' className="plane-image absolute w-20 top-0 left-0"></img>
        </div> */}
        <div className="miami w-full h-1/2">
          <Matrix />
          <div className="flex flex-col text-silver text-3xl mt-4 items-end">
            <span>Master of Science in Computer Science</span>
            <span>Miami University</span>
            <span className="font-bold">2022 - 2024</span>
          </div>
        </div>
      </div>

    </>

  );
};

export default Education;
