import { OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Model } from "../Model";

const Introduction = () => {
  return (
    <section className="introduction bg-gray-light w-full h-full flex">
      {/* <div>
        <img src="images/sampada.jpg" alt="me"></img>
      </div> */}
      <div className="text-9xl font-bold greeting">
        <span className="text-[#8401ff]">H</span>
        <span className="flicker">I</span>
      </div>
      <div className="bg-circle"></div>

      <Canvas shadows>
        <Suspense fallback={null}>
          <Model 
          // position={[0,0,0]} 
          rotation={[0,-1.5,0]}
          />
          {/* <OrbitControls /> */}
          {/* <TransformControls/> */}
        </Suspense>
      </Canvas>

    </section>
  );
}

export default Introduction;
