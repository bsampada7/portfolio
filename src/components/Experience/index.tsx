import { Canvas } from "@react-three/fiber";
import React from "react";
import Wireframe from "../Wireframe";

const Experience = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4  bg-[lavenderblush] relative">
      <div className="w-full h-full absolute opacity-50">
        <Canvas >
          <Wireframe />
        </Canvas>
      </div>
      <div className="absolute flex flex-col w-full h-full p-10 pt-32 pointer-events-none">
        <div className="text-3xl font-bold text-primary">
          <span>Experience</span>
        </div>
        <div className="w-full h-1/2 relative overflow-hidden">
          <div className="flex flex-col text-primary-light text-3xl mt-4">
            <span>Software Engineer</span>
            <span>Alternative Technology</span>
            <span>Technology: React.js, Three.js, JavaScript, TypeScript, Python, CSS. HTML</span>
            <span className="font-bold">2019 - 2022</span>
          </div>

        </div>
        <div className="w-full h-1/2">
          <div className="flex flex-col text-primary-light text-3xl mt-4 items-end">
            <span>Full Stack Developer | Graduate Assistant</span>
            <span>Myaamia Center, Miami University</span>
            <span>Technology: Laravel, JavaScript, Android, Swift</span>
            <span className="font-bold">2022 - 2024</span>
          </div>
        </div>
      </div>



      {/* <div>
      Myaamia work with Myaamia tribal background animation
    </div>
    <div>
      Alternative Technology with rug background, people, love, learning, rooms animation,
    </div>
    <div>
      LIS Nepal, Intern, Mentored background
    </div> */}
    </div>
  );
};

export default Experience;
